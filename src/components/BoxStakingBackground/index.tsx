import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function BoxStakingBackground({ children }: Props) {
  return (
    <div className="min-w-[300px] max-w-[450px] bg-gradient-to-r from-[#FB6060] to-[#FF8A70] rounded-lg p-px">
      {children}
    </div>
  );
}
