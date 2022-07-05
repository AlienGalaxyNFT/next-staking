import { Moralis } from 'moralis';

import { tokenAddress } from '@/contracts/addresses';
import ABI from '@/contracts/TokenAbi.json';

export async function balanceOf(address: string): Promise<number> {
  const sendOptions = {
    contractAddress: tokenAddress,
    functionName: 'balanceOf',
    abi: ABI,
    params: {
      account: address,
    },
  };
  const transaction = await Moralis.executeFunction(sendOptions);
  return +Moralis.Units.FromWei(transaction.toString());
}
