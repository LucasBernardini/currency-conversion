import React from "react";

export default function CurrencyList(props) {
  const { currencyListItems } = props;

  return (
    <div>
        <ul>
      {currencyListItems.map((item) => (
        <li key={item}>test</li>
      ))}
      </ul>
    </div>
  );
}
