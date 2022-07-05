import { Moralis } from 'moralis';

import { stakingAddress } from '@/contracts/addresses';
import ABI from '@/contracts/StakingAbi.json';

export async function staked(address: string): Promise<number> {
  const sendOptions = {
    contractAddress: stakingAddress,
    functionName: 'stakedAmount',
    abi: ABI,
    params: {
      owner: address,
    },
  };

  const transaction = await Moralis.executeFunction(sendOptions);
  console.log(transaction.toString());
  return +Moralis.Units.FromWei(transaction.toString());
}
