import { useContext } from 'react';
import { userInfoContext } from '@/context/UserInfo';

export function BalanceInfo() {
  const { balance } = useContext(userInfoContext);

  return (
    <div className="mt-5 flex justify-between items-center">
      <strong className="font-medium text-xs text-gray-500">GALI Balance</strong>
      <span className="font-medium text-xs text-gray-500">
        {
          balance ? balance.toFixed(0) : '0'
        }
      </span>
    </div>
  );
}
