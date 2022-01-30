import Button from "./Button"
import styles from "./App.module.css"
import { useState,useEffect } from "react";


function App() {
  const [loading,setLoading] = useState(true);
  const[coins,setCoins]=useState([])
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((Response)=>Response.json())
    .then((json)=>{
      setCoins(json);
    setLoading(false);
    });
  },[])
  return (
    <div>
      <h1>The Coins! {loading? "": `(${coins.length})`}</h1>
      {loading? <strong>Loading...</strong>:(
      <select>
        {coins.map((coin,index)=>(
        <option>
          {coin.name}({coin.symbol}):${coin.quotes.USD.price}
        </option>
        ))}
      </select>)}
      
    </div>
  );
}

export default App;
