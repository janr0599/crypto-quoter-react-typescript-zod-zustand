import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
  const { cryptoCurrencyCurrentPriceInfo, loading } = useCryptoStore();

  console.log(cryptoCurrencyCurrentPriceInfo.IMAGEURL);
  return (
    <div className="result-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="result">
            <img
              src={`https://cryptocompare.com/${cryptoCurrencyCurrentPriceInfo.IMAGEURL}`}
              alt="cryptocurrency logo"
            />
            <div>
              <p>
                Price: <span>{cryptoCurrencyCurrentPriceInfo.PRICE}</span>
              </p>
              <p>
                Highest today:{" "}
                <span>{cryptoCurrencyCurrentPriceInfo.HIGHDAY}</span>
              </p>
              <p>
                Lowest today:{" "}
                <span>{cryptoCurrencyCurrentPriceInfo.LOWDAY}</span>
              </p>
              <p>
                24hr Change:{" "}
                <span>
                  {cryptoCurrencyCurrentPriceInfo.CHANGEPCT24HOUR}
                  {""} %
                </span>
              </p>
              <p>
                Last update:{" "}
                <span>
                  {cryptoCurrencyCurrentPriceInfo.CONVERSIONLASTUPDATE}
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
