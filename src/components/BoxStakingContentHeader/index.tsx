import { ActiveLink } from '../ActiveLink';

export function BoxStakingContentHeader() {
  return (
    <div className="flex justify-center w-full h-14 bg-gray-100 rounded-lg">
      <div className="max-w-[280px] w-full h-full flex items-center justify-between">
        <ActiveLink href="/" activeClassName="font-bold text-base bg-gradient-to-r from-[#FB6060] to-[#FF8A70] bg-clip-text text-transparent py-14 px-12"><a>Stake</a></ActiveLink>
        <ActiveLink href="/unstake" activeClassName="font-bold text-base bg-gradient-to-r from-[#FB6060] to-[#FF8A70] bg-clip-text text-transparent py-14 px-12"><a>Stake</a></ActiveLink>
      </div>
    </div>
  );
}
