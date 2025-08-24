// global.d.ts
import { EthereumProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}
