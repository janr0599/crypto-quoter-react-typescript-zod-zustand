import { z } from "zod";

export const currencySchema = z.object({
  code: z.string(),
  name: z.string(),
});
