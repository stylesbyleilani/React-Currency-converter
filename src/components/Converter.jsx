
import React, { useState } from 'react'
import { FaArrowRightArrowLeft } from "react-icons/fa6";

import currencyCodes from './Countries';
const Converter = () => {
  const [amount, setAmount] = useState(1)
  const [ from, setfrom] = useState("USD")
  const [toconverted, setToConverted] = useState("INR")
 const [rateResult, setRateResult] = useState("")


const countryCode = from.substring(0,2)
const secondCountryCode = toconverted.substring(0,2)
  function handleChange(e){
    setAmount(Number(e.target.value))
  }
  function handlefrom(e){
    setfrom(e.target.value)
  }
  function handleToConverted(e){
    setToConverted(e.target.value)
  }
  function handleCurrencySwap(){
    setfrom(toconverted)
    setToConverted(from)
  }

  function handleSubmit(e){
    e.preventDefault();
    getExchangeRate()
  }
  const getExchangeRate = async () => {
   const API = import.meta.env.VITE_API_KEY
   const URL = `https://v6.exchangerate-api.com/v6/${API}/pair/${from}/${toconverted}`

try {
  const res = await fetch(URL);
  if(!res.ok) throw Error("something went wrong!");
  const data = await res.json()
  const rate = (data.conversion_rate * amount).toFixed()
  setRateResult(`${amount} ${from} = ${rate} ${toconverted}`);
  console.log(rate)
} catch (error) {
  console.log(error)
}

  }




  return (
    <div className='main-converter'>
            <div className="nav-container">
        <nav>
            <li><a href="">Exchange</a></li>
            <li><a href="">Convert</a></li>
            <li><a href="">Rate</a></li>
            <li><a href="">News</a></li>
        </nav>
      </div>
      
<div className="converter-container">
  <h2 className='con'>converter</h2>
  <div className="form-container">
<form onSubmit={handleSubmit} >
<p className='name'>Amount</p>
<div className="input-div">
  <input type="number" required   value={amount} onChange={handleChange}/>
    <div className="converter-dropdown">
      <img src= {`https://flagsapi.com/${countryCode}/flat/64.png`} alt="flag" />
      <div className="selected-currency">
        <select name="" id="" className='select-1' value={from} onChange={handlefrom}>
          {currencyCodes.map(code => (
                    <option value={code} key={code} selected>{code} </option>

          ))}

        </select>
      </div>
    </div>
</div>
<div className="updown-div">
<FaArrowRightArrowLeft className='updown' onClick={handleCurrencySwap}/>
</div>

<div className="rate-div">
    <div className="converter-dropdown-2">
    <div className="div-rate">
        </div>
        <div className="img-div-div">
      <img src={`https://flagsapi.com/${secondCountryCode}/flat/64.png`} alt="flag" />
      <div className="selected-currency">
        <select name="" id="" className='select-1' value={toconverted} onChange={handleToConverted}>
        {currencyCodes.map(code => (
                    <option value={code} key={code} selected>{code} </option>

          ))}

        </select>
        </div>
      </div>
    </div>
</div>
<div className="btn-div">
<button type='submit'>Convert</button>
</div>
</form>
<p className='name'>Receive</p>

<div className="rate-btn">
<button className='btn-rate'>{rateResult} </button>
</div>
</div>
</div>

    
        
        
    



     </div>





  )
}

export default Converter
