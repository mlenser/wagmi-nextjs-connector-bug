'use client';

import { ConnectButton } from '../components/ConnectButton';
import { useAccount } from 'wagmi';
import { Connected } from './Connected';

const Home = () => {
  const { isConnected } = useAccount();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <ConnectButton />
      {isConnected ? <Connected /> : null}
    </main>
  );
};

export default Home;
