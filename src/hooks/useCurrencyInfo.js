import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    // setting data to empty object if in case fetch fails
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency]) // coz you want to load this after currency is changed

    // console.log(data);
    return data
}

// exporting the custom hook entirely
export default useCurrencyInfo;