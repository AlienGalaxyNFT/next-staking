import {
  createContext, ReactNode, useEffect, useState,
} from 'react';
import { useMoralis } from 'react-moralis';
import { allowance } from '@/scripts/allowance';
import { balanceOf } from '@/scripts/balance';
import { avaiableReward } from '@/scripts/avaiable-reward';
import { staked } from '@/scripts/staked';

interface UserInfoContextProps {
  allowed: number;
  balance: number;
  avaiableReward: number;
  staked: number;
  updateAllowed: () => void;
  updateBalance: () => void;
  updateStaked: () => void;
  updateAvaiableReward: () => void;
}

export const userInfoContext = createContext<UserInfoContextProps>({} as UserInfoContextProps);

interface UserInfoProviderProps {
  children: ReactNode;
}

export function UserInfoProvider({ children }: UserInfoProviderProps) {
  const { isAuthenticated, account, isWeb3Enabled } = useMoralis();
  const [allowed, setAllowed] = useState(0);
  const [balance, setBalance] = useState(0);
  const [avaiableRewardAmount, setAvaiableRewardAmount] = useState(0);
  const [stakedAmount, setStakedAmount] = useState(0);

  useEffect(() => {
    if (isAuthenticated && isWeb3Enabled) {
      allowance(account!)
        .then((value) => setAllowed(value));

      balanceOf(account!)
        .then((value) => setBalance(value));

      avaiableReward()
        .then((value) => setAvaiableRewardAmount(value));

      staked(account!)
        .then((value) => setStakedAmount(value));
    }
  }, [isAuthenticated, account]);

  function updateAllowed() {
    allowance(account!)
      .then((value) => setAllowed(value));
  }

  function updateBalance() {
    balanceOf(account!)
      .then((value) => setBalance(value));
  }

  function updateStaked() {
    staked(account!)
      .then((value) => setStakedAmount(value));
  }

  function updateAvaiableReward() {
    avaiableReward()
      .then((value) => setAvaiableRewardAmount(value));
  }

  return (
    <userInfoContext.Provider value={{
      allowed,
      balance,
      avaiableReward: avaiableRewardAmount,
      staked: stakedAmount,
      updateAllowed,
      updateBalance,
      updateStaked,
      updateAvaiableReward,
    }}
    >
      {children}
    </userInfoContext.Provider>
  );
}
