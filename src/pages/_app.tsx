import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';
import { UserInfoProvider } from '@/context/UserInfo';

function App({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider serverUrl={process.env.NEXT_PUBLIC_SERVER_URL || ''} appId={process.env.NEXT_PUBLIC_APP_ID || ''}>
      <UserInfoProvider>
        <Component {...pageProps} />
      </UserInfoProvider>
    </MoralisProvider>
  );
}

export default App;
