import React, { useId } from 'react'

function InputBox({
    label, 
    amount, 
    onAmountChange, 
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd"
}) {
   
    const amountInputId = useId()

    return (
        // add user given classes
        <div className="bg-white p-3 rounded-lg text-sm flex"> 
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block"
                htmlFor={amountInputId}>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    // && coz to handle if no function is passed, Number() to handle str to number
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg 
                    px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}> { currency }</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;