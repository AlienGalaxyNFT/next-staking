import { Moralis } from 'moralis';

import { stakingAddress } from '@/contracts/addresses';
import ABI from '@/contracts/StakingAbi.json';

export async function withdraw(address: string) {
  console.log(address);
  const sendOptions = {
    contractAddress: stakingAddress,
    functionName: 'withdraw',
    abi: ABI,
    params: {
      msgSender: address,
    },
  };
  const transaction = await Moralis.executeFunction(sendOptions);
  return (+transaction.toString() * 1e-18).toFixed(2);
}
