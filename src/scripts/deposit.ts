import { Moralis } from 'moralis';

import { stakingAddress } from '@/contracts/addresses';
import ABI from '@/contracts/StakingAbi.json';

export async function deposit(amount: string) {
  console.log(Moralis.Units.Token(amount, 18));
  const sendOptions = {
    contractAddress: stakingAddress,
    functionName: 'deposit',
    abi: ABI,
    params: {
      _amount: Moralis.Units.Token(amount, 18),
    },
  };
  const transaction = await Moralis.executeFunction(sendOptions);
  console.log(transaction);
  return transaction;
}
