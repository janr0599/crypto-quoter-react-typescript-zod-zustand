import { useState, ChangeEvent, FormEvent } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import type { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

function CryptoSearchForm() {
  const { cryptocurrencies, fetchData } = useCryptoStore();

  const [pair, setPair] = useState<Pair>({
    currency: "",
    cryptocurrency: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes("")) {
      setError("All fields are required");
      return;
    }
    setError("");
    fetchData(pair);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Currency:</label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">-- Choose --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Cryptocurrency:</label>
        <select
          name="cryptocurrency"
          id="cryptocurrency"
          onChange={handleChange}
          value={pair.cryptocurrency}
        >
          <option value="">-- Choose --</option>
          {cryptocurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="quote" />
    </form>
  );
}

export default CryptoSearchForm;
