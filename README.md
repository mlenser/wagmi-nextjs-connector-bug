## Reproduction steps

1. Run the `pnpm dev` command
2. Open the app
3. Connect a wallet on Sepolia
4. You should see total WETH supply and a successful simulated contract.
5. Trigger a hot reload by adding 2 line breaks to [Connected.tsx](./src/app/Connected.tsx) for example.
6. You should see an error in the UI and details in the console:

```
TypeError: connection.connector.getProvider is not a function
at getConnectorClient (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/@wagmi+core@2.6.5_@types+react@18.2.65_react@18.2.0_typescript@5.4.2_viem@2.8.5/node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js:40:50)
at simulateContract (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/@wagmi+core@2.6.5_@types+react@18.2.65_react@18.2.0_typescript@5.4.2_viem@2.8.5/node_modules/@wagmi/core/dist/esm/actions/simulateContract.js:22:113)
at Object.queryFn (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/@wagmi+core@2.6.5_@types+react@18.2.65_react@18.2.0_typescript@5.4.2_viem@2.8.5/node_modules/@wagmi/core/dist/esm/query/simulateContract.js:25:98)
at Object.fetchFn [as fn] (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/@tanstack+query-core@5.28.0/node_modules/@tanstack/query-core/build/modern/query.js:197:27)
at run (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/@tanstack+query-core@5.28.0/node_modules/@tanstack/query-core/build/modern/retryer.js:93:31)
at eval (webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/@tanstack+query-core@5.28.0/node_modules/@tanstack/query-core/build/modern/retryer.js:120:11)
```

I've tried with and without these in the [config.ts](./src/app/config.ts) file. It didn't seem to make a difference.
```
  enableCoinbase: true,
  enableEIP6963: true,
  enableInjected: true,
  enableWalletConnect: true,
```

