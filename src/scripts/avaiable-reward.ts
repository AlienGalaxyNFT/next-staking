import { Moralis } from 'moralis';

import { stakingAddress } from '@/contracts/addresses';
import ABI from '@/contracts/StakingAbi.json';

export async function avaiableReward(): Promise<number> {
  const sendOptions = {
    contractAddress: stakingAddress,
    functionName: 'avaiableReward',
    abi: ABI,
  };

  const transaction = await Moralis.executeFunction(sendOptions);
  return +Moralis.Units.FromWei(transaction.toString());
}
