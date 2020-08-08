import React from "react";
import _ from "lodash";

export default function CurrencyList(props) {
  const { currencyListItems, currencyName } = props;





  return (
    <div>
      <ul>
        {_.toArray(currencyListItems).map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <ul>
        {currencyName.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
