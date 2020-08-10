import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./components/CurrencyRow";
import CurrencyList from "./components/CurrencyList";

const xchangeURL = "https://api.exchangeratesapi.io/latest";

function App() {
  const [currencyRates, setCurrencyRates] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [currencyListItems, setCurrencyListItems] = useState()


  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(xchangeURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyRates([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
        setCurrencyListItems(data.rates);
      });
  }, []);


  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${xchangeURL}?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(res => res.json())
      .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  },[fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <div className="App">
      <h1>Currency Conversion</h1>
      <CurrencyRow
        currencyRates={currencyRates}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        amount={fromAmount}
        onChangeAmount={handleFromAmountChange}
      />
      <div className="equal">=</div>
      <CurrencyRow
        currencyRates={currencyRates}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={handleToAmountChange}
      />

      <CurrencyList 
        currencyListItems={currencyListItems}
        currencyName={currencyRates}
      />
    </div>
  );
}

export default App;
