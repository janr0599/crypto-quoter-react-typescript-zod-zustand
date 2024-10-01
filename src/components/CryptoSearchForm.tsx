import { currencies } from "../data";

function CryptoSearchForm() {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Currency:</label>
        <select name="currency" id="currency">
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
        <select name="cryptocurrency" id="cryptocurrency">
          <option value="">-- Choose --</option>
        </select>
      </div>

      <input type="submit" value="quote" />
    </form>
  );
}

export default CryptoSearchForm;
