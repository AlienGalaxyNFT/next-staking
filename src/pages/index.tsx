import type { NextPage } from 'next';
import {
  BoxStakingBackground,
  BoxStakingContent,
  BoxStakingContentHeader,
  BoxStakingContentInfo,
  BoxStakingContentForm,
  BalanceInfo,
  Button,
} from '@/components';

const Stake: NextPage = () => (
  <BoxStakingBackground>
    <div className="w-full bg-gray-600 rounded-lg p-5">
      <header className="flex items-center justify-center text-2xl font-bold">
        Staking
      </header>
      <BoxStakingContent>
        <BoxStakingContentHeader />
        <div className="flex flex-col p-8">
          <BoxStakingContentInfo />
          <BoxStakingContentForm />
          <BalanceInfo />
          <Button />
        </div>
      </BoxStakingContent>
    </div>
  </BoxStakingBackground>
);

export default Stake;
