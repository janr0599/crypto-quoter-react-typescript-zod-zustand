import { z } from "zod";
import {
  currencySchema,
  CryptoCurrenciesResponseSchema,
  pairSchema,
  CryptoCurrencyCurrentPriceResponseSchema,
} from "../schemas/crypto-schema";

export type Currency = z.infer<typeof currencySchema>;

export type CryptoCurrencies = z.infer<typeof CryptoCurrenciesResponseSchema>;

export type Pair = z.infer<typeof pairSchema>;

export type CryptoCurrencyCurrentPrice = z.infer<
  typeof CryptoCurrencyCurrentPriceResponseSchema
>;
