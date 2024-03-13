import { useReadContract } from 'wagmi';
import { erc20Abi } from 'viem';
import { SimulateTransaction } from './SimulateTransaction';

const WethOnSepoliaAddress = '0xfff9976782d46cc05630d1f6ebab18b2324d6b14';

export const Connected = () => {
  const { data: totalWethSupply } = useReadContract({
    abi: erc20Abi,
    address: WethOnSepoliaAddress,
    functionName: 'totalSupply',
  });

  return (
    <div>
      <div>Total WETH on Sepolia supply: {totalWethSupply?.toString()}</div>
      <SimulateTransaction />
    </div>
  );
};
