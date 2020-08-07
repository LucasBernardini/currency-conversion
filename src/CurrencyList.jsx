import React from "react";
import _ from 'lodash';

export default function CurrencyList(props) {
  const { currencyListItems } = props;
  console.log(currencyListItems)
  return (
    <div>
        <ul>
        {_.toArray(currencyListItems).map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
