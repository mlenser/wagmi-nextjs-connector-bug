import { createWeb3Modal } from '@web3modal/wagmi/react';
import { mainnet } from 'wagmi/chains';
import { config } from './config';

createWeb3Modal({
  defaultChain: mainnet,
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
  wagmiConfig: config,
});
