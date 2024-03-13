import { useAccount, useReadContract, useSimulateContract } from 'wagmi';
import { type Address, erc20Abi } from 'viem';

const WethOnSepoliaAddress = '0xfff9976782d46cc05630d1f6ebab18b2324d6b14';

export const Connected = () => {
  const { address } = useAccount();
  const { data: totalWethSupply } = useReadContract({
    abi: erc20Abi,
    address: WethOnSepoliaAddress,
    functionName: 'totalSupply',
  });

  const {
    data: dataSimulate,
    error: errorSimulate,
    isError: isErrorSimulate,
    isSuccess: isSuccessSimulate,
  } = useSimulateContract({
    abi: erc20Abi,
    address: WethOnSepoliaAddress,
    args: [address as Address, BigInt(1)],
    functionName: 'approve',
  });

  console.log('--- ', { dataSimulate, errorSimulate });

  return (
    <>
      <div>Total WETH on Sepolia supply: {totalWethSupply?.toString()}</div>
      {isErrorSimulate ? <div>Error - check console</div> : null}
      {isSuccessSimulate ? <div>Success</div> : null}
    </>
  );
};
