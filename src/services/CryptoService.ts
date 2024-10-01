import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "../schemas/crypto-schema";

export const getCryptos = async () => {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

  const { data } = await axios(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(data.Data);
  if (result.success) {
    return result.data;
  }
};
