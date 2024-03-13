'use client';

import { ConnectButton } from '../components/ConnectButton';
import { useAccount } from 'wagmi';
import { Connected } from '@/app/Connected';

const Home = () => {
  const { isConnected } = useAccount();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {isConnected ? <Connected /> : <ConnectButton />}
    </main>
  );
};

export default Home;
