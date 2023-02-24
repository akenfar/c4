import React from 'react'
import './BuyCoins.css';
import { FaCoins } from "react-icons/fa";
function ButtonConi({price,Quntity,getPrice}) {

  const show=()=>{
    getPrice(price)
    // console.log('price from button', price);
  }
  return (
    
    <div className='ButtonCoin'>
            <h1>{Quntity} coins</h1>
            <button className='price' onClick={()=>show()}>{price}$</button>
    </div>      

  )
}

export default ButtonConi