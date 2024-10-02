import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryproCurrencyCurrentPrice, CryptoCurrencies, Pair } from "./types";
import { getCryptos, getCurrentCryptoPrice } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: CryptoCurrencies;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],

    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();

      set(() => ({
        cryptocurrencies,
      }));
    },

    fetchData: async (pair) => {
      await getCurrentCryptoPrice(pair);
    },
  }))
);
