import { http, cookieStorage, createStorage } from 'wagmi';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';

import { mainnet, sepolia } from 'wagmi/chains';

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

if (!projectId) {
  throw new Error('Project ID is not defined');
}

const metadata = {
  name: 'Nextjs connector issue',
  description: 'Nextjs connector issue',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

// Create wagmiConfig
const chains = [mainnet, sepolia] as const;
export const config = defaultWagmiConfig({
  chains,
  enableCoinbase: true,
  enableEIP6963: true,
  enableInjected: true,
  enableWalletConnect: true,
  metadata,
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
