import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoCurrencyCurrentPrice, CryptoCurrencies, Pair } from "./types";
import { getCryptos, getCurrentCryptoPrice } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: CryptoCurrencies;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
  cryptoCurrencyCurrentPriceInfo: CryptoCurrencyCurrentPrice;
  loading: boolean;
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

    cryptoCurrencyCurrentPriceInfo: {
      IMAGEURL: "",
      PRICE: "",
      HIGHDAY: "",
      LOWDAY: "",
      CHANGEPCT24HOUR: "",
      CONVERSIONLASTUPDATE: "",
    },

    loading: false,

    fetchData: async (pair) => {
      set(() => ({
        loading: true,
      }));

      const cryptoCurrencyCurrentPriceInfo = await getCurrentCryptoPrice(pair);

      set(() => ({
        cryptoCurrencyCurrentPriceInfo,
        loading: false,
      }));
    },
  }))
);
