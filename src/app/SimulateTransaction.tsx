import { useAccount, useSimulateContract } from 'wagmi';
import { type Address, erc20Abi } from 'viem';

const WethOnSepoliaAddress = '0xfff9976782d46cc05630d1f6ebab18b2324d6b14';

export const SimulateTransaction = () => {
  const { address } = useAccount();
  const {
    data: dataSimulate,
    error: errorSimulate,
    isError: isErrorSimulate,
    isLoading: isLoadingSimulate,
    isSuccess: isSuccessSimulate,
  } = useSimulateContract({
    abi: erc20Abi,
    address: WethOnSepoliaAddress,
    args: [address as Address, BigInt(1)],
    functionName: 'approve',
  });

  console.log('--- ', { dataSimulate, errorSimulate });

  return (
    <div>
      {isErrorSimulate ? <div>Error - check console</div> : null}
      {isLoadingSimulate ? <div>Loading</div> : null}
      {isSuccessSimulate ? <div>Success</div> : null}
    </div>
  );
};
