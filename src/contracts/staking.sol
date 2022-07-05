// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Staking is Ownable {
  using SafeMath for uint256;

  // token address
  IERC20 public token;
  // minimum amount of tokens to stake
  uint256 public minStake;
  // timelock period for staking
  uint256 public timelock;
  // nonce for staking
  uint256 public nonce = 0;
  // percentage of tokens to be returned on unstake
  uint256 public percentage = 5;
  // status paused or not
  bool public paused = false;

  struct GroupStake {
    uint256 nonce;
    address owner;
    uint256 amount;
    uint256 depositedAt;
  }

  mapping(address => GroupStake[]) private _groupStakes;
  mapping(address => uint256) private staked;
  mapping(address => bool) public isStaker;

  event Deposit(address indexed staker, uint256 amount);
  event Withdraw(address indexed staker, uint256 amount);

  constructor (IERC20 _token, uint256 _minStake, uint256 _timelock, uint256 _percent) {
    require(address(_token) != address(0), "Error: Token address cannot be 0");
    require(_minStake > 0, "Error: Minimum stake amount must be greater than 0");
    require(_timelock > 0, "Error: Timelock period must be greater than 0");
    require(_percent > 0, "Error: Stake percent must be greater than 0");
    token = _token;
    minStake = _minStake;
    timelock = _timelock;
    percentage = _percent;
  }

  receive() external payable {
    withdraw(payable(msg.sender));
  }

  fallback() external payable {
    withdraw(payable(msg.sender));
  }

  function deposit(uint256 _amount) public {
    require(paused != true, "Error: Contract is paused");
    require(_amount >= minStake, "Error: Minimum stake amount 1000");

    // transfer tokens to the contract
    token.transferFrom(msg.sender, address(this), _amount);

    // add the stake to the groupStakes mapping
    GroupStake memory stake = GroupStake({
      nonce: nonce + 1,
      owner: msg.sender,
      amount: _amount,
      depositedAt: block.timestamp
    });

    _groupStakes[msg.sender].push(stake);

    // add the stake to the balances mapping
    staked[msg.sender] += _amount;

    // set the staker status to true
    isStaker[msg.sender] = true;

    // increment nonce
    nonce++;
    emit Deposit(msg.sender, _amount);
  }

  function withdraw(address payable msgSender) public payable {
    require(paused != true, "Error: Contract is paused");
    require(isStaker[msgSender], "Error: Staker is not staking");
    require(staked[msgSender] > 0, "Error: Staker has no tokens to withdraw");
    require(msg.sender == msgSender, "Error: Only staker can withdraw");

    uint256 amount;

    for (uint256 i = 0; i < _groupStakes[msgSender].length; i++) {
      GroupStake memory stake = _groupStakes[msgSender][i];
      
      if(stake.depositedAt + timelock <= block.timestamp) {
        amount = stake.amount;

        delete _groupStakes[msgSender][i];
      }
    }

    //calculate the reward amount
    uint256 reward = amount + amount * percentage / 100;

    //remove the stake from the balances mapping
    staked[msgSender] -= amount;

    // transfer tokens to the staker
    token.transfer(msgSender, reward);
    emit Withdraw(msgSender, reward);
  }

  function avaiableReward() public view returns (uint256) {
    uint256 amount = 0;

    for(uint256 i = 0; i < _groupStakes[msg.sender].length; i++) {
      GroupStake storage stake = _groupStakes[msg.sender][i];
      
      // checks if there is any amount available to withdraw
      if(stake.depositedAt + timelock <= block.timestamp) {
        amount += stake.amount;
      }
    }

    return amount + (amount * percentage / 100);
  }

  // pause the contract
  function pause() public onlyOwner {
    paused = true;
  }

  // unpause the contract
  function unpause() public onlyOwner {
    paused = false;
  }

  // owner can change the minimum stake amount
  function changePercent(uint256 _percent) public onlyOwner {
    require(_percent > 0, "Error: Stake percent must be greater than 0");
    percentage = _percent;
  }

  // owner can change the minimum stake amount
  function changeMinStake(uint256 _minStake) public onlyOwner {
    require(_minStake > 0, "Error: Minimum stake amount must be greater than 0");
    minStake = _minStake;
  }

  // owner can change the timelock period
  // @param _timelock: time in seconds
  function changeTimelock(uint256 _timelock) public onlyOwner {
    require(_timelock > 0, "Error: Timelock must be greater than 0");
    timelock = _timelock;
  }

  function stakedAmount(address owner) public view returns (uint256) {
    return staked[owner];
  }
}
