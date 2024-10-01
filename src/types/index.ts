import { z } from "zod";
import {
  currencySchema,
  CryptoCurrenciesResponseSchema,
} from "../schemas/crypto-schema";

export type Currency = z.infer<typeof currencySchema>;
export type CryptoCurrencies = z.infer<typeof CryptoCurrenciesResponseSchema>;
