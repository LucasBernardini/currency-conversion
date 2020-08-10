import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyRates,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props



    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
                <select value={selectedCurrency} onChange={onChangeCurrency}>
                    {currencyRates.map((currency) => (
    
                        <option key={currency} value={currency}>{currency}</option>
                        
                    ))}
                    </select>
        </div>
    )
}
