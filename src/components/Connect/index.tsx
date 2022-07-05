import { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';

export function Connect() {
  const {
    isAuthenticated, authenticate, account, logout,
  } = useMoralis();

  const [accountAddress, setAccountAddress] = useState<string>('');

  useEffect(() => {
    if (isAuthenticated && account !== null) {
      setAccountAddress(
        `${account.substring(0, 6)}...`,
      );
    } else {
      setAccountAddress('CONNECT');
    }
  }, [isAuthenticated, account]);

  async function handleConnect() {
    await authenticate({ signingMessage: 'Authorize linking of your wallet' });
  }

  async function handleDisconnect() {
    await logout();
  }

  async function toggleConnect() {
    if (isAuthenticated) {
      await handleDisconnect();
    } else {
      await handleConnect();
    }
  }

  return (
    <button type="submit" onClick={toggleConnect} className="max-w-xs absolute top-0 xl:right-0  xl:m-5 my-5 mx-auto bg-gradient-to-r from-[#FB6060] to-[#FF8A70] h-14 w-full text-black font-semibold text-xs rounded-lg capitalize">{ accountAddress }</button>
  );
}
