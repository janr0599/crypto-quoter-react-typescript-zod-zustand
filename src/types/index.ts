import { z } from "zod";
import { currencySchema } from "../schemas/crypto-schema";

export type Currency = z.infer<typeof currencySchema>;
