import { Moralis } from 'moralis';

import { tokenAddress, stakingAddress } from '@/contracts/addresses';
import ABI from '@/contracts/TokenAbi.json';

export async function approve() {
  const sendOptions = {
    contractAddress: tokenAddress,
    functionName: 'approve',
    abi: ABI,
    params: {
      spender: stakingAddress,
      amount: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    },
  };
  const transaction = await Moralis.executeFunction(sendOptions);
  return transaction;
}
