import axios from "axios";
import {
  CryptoCurrenciesResponseSchema,
  CryptoCurrencyCurrentPriceResponseSchema,
} from "../schemas/crypto-schema";
import { Pair } from "../types";

export const getCryptos = async () => {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

  const {
    data: { Data },
  } = await axios(url);
  console.log(Data);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
};

export const getCurrentCryptoPrice = async (pair: Pair) => {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;
  const {
    data: { DISPLAY },
  } = await axios(url);

  const response = DISPLAY[pair.cryptocurrency][pair.currency];
  const result = CryptoCurrencyCurrentPriceResponseSchema.safeParse(response);
  if (result.success) {
    return result.data;
  }
};
