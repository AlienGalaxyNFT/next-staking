import { useRouter } from 'next/router';
import { useContext, MouseEvent } from 'react';
import { useMoralis } from 'react-moralis';
import { userInfoContext } from '@/context/UserInfo';
import { deposit } from '@/scripts/deposit';
import { approve } from '@/scripts/approve';
import { withdraw } from '@/scripts/withdraw';

interface BoxButtonProps {
  value: number;
}

export function Button({ value }: BoxButtonProps) {
  const { pathname } = useRouter();

  const { isAuthenticated, account } = useMoralis();
  const {
    allowed, updateAvaiableReward, updateAllowed, updateStaked, updateBalance,
  } = useContext(userInfoContext);

  async function handleApprove(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (isAuthenticated) {
      const transaction: any = await approve();
      const result = await transaction.wait();
      if (result.status === 1) {
        updateAllowed();
      }
    }
  }
  async function handleClickOnStakeButton(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const transaction: any = await deposit(value.toString());
    const result = await transaction.wait();
    if (result.status === 1) {
      updateStaked();
      updateBalance();
    } else {
      console.log('Error');
      console.log(result);
    }
  }

  async function handleClickOnWithdrawButton(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    await withdraw(account!);
    setTimeout(() => {
      updateStaked();
      updateBalance();
      updateAvaiableReward();
    }, 20000);
  }

  if (pathname === '/') {
    if (isAuthenticated && allowed > 0 && allowed > value && value < 1000) {
      return (<button type="submit" className="mt-10 bg-gradient-to-r from-[#fb6060a2] to-[#ff8a708f] h-14 w-full text-black font-semibold text-xs rounded-lg capitalize cursor-not-allowed">stake</button>);
    } if (isAuthenticated && allowed > 0 && allowed > value && value >= 1000) {
      return (<button type="submit" onClick={handleClickOnStakeButton} className="mt-10 bg-gradient-to-r from-[#fb6060] to-[#ff8a70] h-14 w-full text-black font-semibold text-xs rounded-lg capitalize">stake</button>);
    }
    return (<button type="submit" onClick={handleApprove} className="mt-10 bg-gradient-to-r from-[#fb6060] to-[#ff8a70] h-14 w-full text-black font-semibold text-xs rounded-lg capitalize">Approve</button>);
  }
  return (<button type="submit" onClick={handleClickOnWithdrawButton} className="mt-10 bg-gradient-to-r from-[#fb6060] to-[#ff8a70] h-14 w-full text-black font-semibold text-xs rounded-lg capitalize">Unstake</button>);
}
