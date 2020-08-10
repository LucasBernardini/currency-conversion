import React from "react";
import _ from "lodash";
import "./currencyList.scss";

export default function CurrencyList(props) {
  const { currencyListItems, currencyName } = props;

  return (
    <>
      <h2 className="header2">List Of Current Exchange Rates:</h2>
      <div className="container">
        <ul className="currency currency__name">
          {currencyName.map((item) => (
            <li className="currency__name--item">{item}</li>
          ))}
        </ul>
        <ul className="currency currency__dollar">
          {_.toArray(currencyListItems).map((item) => (
            <li className="currency__dollar--item">{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
