// useCurrencyInfo.js
import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lower = currency.toLowerCase();
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${lower}.json`
        );
        const json = await res.json();
        setData(json[lower]);
        
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setData({});
      }
    };

    fetchData(); // call the async function inside useEffect
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
