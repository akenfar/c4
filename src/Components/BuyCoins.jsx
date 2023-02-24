import React, { useEffect, useState } from 'react'
import './BuyCoins.css';
import { FaCoins } from "react-icons/fa";
import ButtonConi from './ButtonConi';
import Paymment from '../paymment/paymment';
// import Paymment from '../paymment/paymment';
function BuyCoins() {
  const [price, setPrice] = useState(null);
  const [inputprice, setInputPrice] = useState(null);
  const [message, setMessage] = useState('');
  const [globalPrice, setGlobalPrice] = useState(null);
  const [isSend, setissend] = useState(false);
  const getPrice = (newPrice) => {
    setPrice(newPrice)
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    setissend(true);
    if (inputprice != null) {
      setGlobalPrice(inputprice)
      setPrice(null);
    }
  }


  useEffect(() => {
    if (isSend === true) {
      if (globalPrice === null) {
        setMessage('select  coins first');
      }
      if (globalPrice != null) {
        setMessage('');
        console.log('global', globalPrice);
      }
    }
  }, [globalPrice, isSend])
  console.log('price',inputprice)
  console.log('gprice',globalPrice)

  return (
    <>
      {!globalPrice && !price &&<div className='BuyCoins'>

        <div className="mySold">
          <h2>My Sold:</h2> <button className='sold'>0 Coins</button>
        </div>
        <hr />

        <div>
          <div className='shose_option'>
            <div className="heading">
              <h2>Buy coins</h2>
              <FaCoins style={{ marginInline: 'auto' }}
                size={35}
                color={'#D8D243'}
              />
            </div>
            <div className='alloptions'>
              <div className='ontion'>
                <ButtonConi price={10} Quntity={100} getPrice={getPrice} />
                <ButtonConi price={24} Quntity={300} getPrice={getPrice} />
                <ButtonConi price={35} Quntity={500} getPrice={getPrice} />

                <form className='Contity' onSubmit={handelSubmit}>
                  <p htmlFor="">Coins</p><br />
                  <input type="number" onChange={(e) => setInputPrice(e.target.value)} min="1"/><br />
                  <button >Buy</button>
                </form>
                <small style={{ color: 'red' }}>{message}</small>

              </div>
            </div>
          </div>
        </div>
      </div>}
      {(globalPrice || price) && <Paymment sold={price} coins={globalPrice}/>}
    </>
  )
}

export default BuyCoins