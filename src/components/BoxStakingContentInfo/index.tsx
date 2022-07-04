import { CardInfo } from '@/components/CardInfo';

export function BoxStakingContentInfo() {
  return (
    <div className="flex justify-center gap-x-10 items-center">
      <CardInfo
        classStyledBackgroundTitle="flex justify-center items-center w-16 h-5 bg-[#D9D9D9] rounded-lg text-xs font-semibold text-gray-500"
        title="Staked"
      />
      <CardInfo
        classStyledBackgroundTitle="flex justify-center items-center w-16 h-5 bg-gradient-to-r from-[#7A85E8] to-[#6CD6F9] rounded-lg text-xs font-semibold text-black"
        title="Reward"
      />
    </div>
  );
}
