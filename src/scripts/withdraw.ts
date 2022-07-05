import { Moralis } from 'moralis';

import { stakingAddress } from '@/contracts/addresses';
import ABI from '@/contracts/StakingAbi.json';

export async function withdraw(address: string) {
  const sendOptions = {
    contractAddress: stakingAddress,
    functionName: 'withdraw',
    abi: ABI,
    params: {
      _msgSender: address,
    },
  };
  const transaction = await Moralis.executeFunction(sendOptions);
  return (+transaction.toString() * 1e-18).toFixed(2);
}
