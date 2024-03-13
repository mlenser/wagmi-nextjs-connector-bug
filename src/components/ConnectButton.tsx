'use client';

import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

export const ConnectButton = ({ ...rest }) => {
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();

  return (
    <>
      <button
        onClick={() => {
          open();
        }}
        {...rest}
      >
        {isConnected ? 'Open connector' : 'Connect'}
      </button>
    </>
  );
};
