import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function BoxStakingContent({ children }: Props) {
  return (
    <div className="w-full bg-gray-200 rounded-lg">
      {children}
    </div>
  );
}
