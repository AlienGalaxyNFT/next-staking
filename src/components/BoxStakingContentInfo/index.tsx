import { useContext } from 'react';
import { CardInfo } from '@/components/CardInfo';
import { userInfoContext } from '@/context/UserInfo';

export function BoxStakingContentInfo() {
  const { staked, avaiableReward } = useContext(userInfoContext);
  return (
    <div className="flex justify-center gap-x-10 items-center">
      <CardInfo
        classStyledBackgroundTitle="flex justify-center items-center w-16 h-5 bg-[#D9D9D9] rounded-lg text-xs font-semibold text-gray-500"
        title="Staked"
        value={staked}
      />
      <CardInfo
        classStyledBackgroundTitle="flex justify-center items-center w-16 h-5 bg-gradient-to-r from-[#7A85E8] to-[#6CD6F9] rounded-lg text-xs font-semibold text-black"
        title="Reward"
        value={avaiableReward}
      />
    </div>
  );
}
