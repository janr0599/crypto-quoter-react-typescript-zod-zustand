import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoCurrencies } from "./types";
import { getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: CryptoCurrencies;
  fetchCryptos: () => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      console.log(cryptocurrencies);

      set(() => ({
        cryptocurrencies,
      }));
    },
  }))
);
