import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import {
  BoxStakingBackground,
  BoxStakingContent,
  BoxStakingContentHeader,
  BoxStakingContentInfo,
  BoxStakingContentForm,
  Connect,
} from '@/components';
import LogoImage from '@/public/icon.png';

const Stake: NextPage = () => (
  <>
    <NextSeo
      title="Alien Galaxy - Stake"
      description='Alien Galaxy NFT Game - Play to Earn $Gali and exchange for Dollar. Have fun playing the best NFT game. Mine the $Gali cryptocurrency token and exchange it for USD. Join Now Whitelist. Play to earn. Staking'
    />
    <div className="flex items-center justify-center w-screen h-screen">
      <Connect />
      <BoxStakingBackground>
        <div className="w-full bg-gray-600 rounded-lg p-5">
          <header className="flex flex-row items-center justify-center pb-5">
            <Image alt='Alien Galaxy Logo' src={LogoImage} width={40} height={40} className="items-start" />
            <span className="text-2xl font-bold w-full flex justify-center">STAKING</span>
          </header>
          <BoxStakingContent>
            <BoxStakingContentHeader />
            <div className="flex flex-col p-8">
              <BoxStakingContentInfo />
              <BoxStakingContentForm />
            </div>
          </BoxStakingContent>
        </div>
      </BoxStakingBackground>
    </div>
  </>
);

export default Stake;
