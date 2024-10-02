import { useEffect, useMemo } from "react";
import CryptoSearchForm from "./components/CryptoSearchForm";
import { useCryptoStore } from "./store";
import CurrentCryptoPriceInfo from "./components/CurrentCryptoPriceInfo";

function App() {
  const { fetchCryptos, cryptoCurrencyCurrentPriceInfo } = useCryptoStore();

  useEffect(() => {
    fetchCryptos();
  }, []);

  const hasPriceInfo = useMemo(
    () => !Object.values(cryptoCurrencyCurrentPriceInfo).includes(""),
    [cryptoCurrencyCurrentPriceInfo]
  );

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cryptocurrency <span>Quoter</span>
        </h1>

        <div className="content">
          <CryptoSearchForm />
          {hasPriceInfo && <CurrentCryptoPriceInfo />}
        </div>
      </div>
    </>
  );
}

export default App;
