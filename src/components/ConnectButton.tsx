'use client';

import { useWeb3Modal } from '@web3modal/wagmi/react';

export const ConnectButton = ({ ...rest }) => {
  const { open } = useWeb3Modal();

  return (
    <>
      <button
        onClick={() => {
          open();
        }}
        {...rest}
      >
        Connect
      </button>
    </>
  );
};
