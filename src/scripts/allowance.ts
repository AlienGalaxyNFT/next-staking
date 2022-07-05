import { Moralis } from 'moralis';

import { tokenAddress, stakingAddress } from '@/contracts/addresses';
import ABI from '@/contracts/TokenAbi.json';

export async function allowance(owner: string): Promise<number> {
  const sendOptions = {
    contractAddress: tokenAddress,
    functionName: 'allowance',
    abi: ABI,
    params: {
      owner,
      spender: stakingAddress,
    },
  };

  const transaction = await Moralis.executeFunction(sendOptions);
  return +Moralis.Units.ETH(transaction.toString());
}
