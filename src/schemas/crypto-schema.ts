import { z } from "zod";

export const currencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

//use Z.array as the response from the API comes as an Array of objects
export const CryptoCurrenciesResponseSchema = z.array(
  z.object({
    CoinInfo: z.object({
      FullName: z.string(),
      Name: z.string(),
    }),
  })
);

export const pairSchema = z.object({
  currency: z.string(),
  cryptocurrency: z.string(),
});
