
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";

const ConverterContent = () => {


  const currentDate = new Date()
  const dayweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const months = ["Jan", "Feb", "Mar", 'Apr', "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const dayweeks = dayweek[currentDate.getDay()]
  const month = months[currentDate.getMonth()]
  const daymonth = currentDate.getDate()
  const FormatedDate = `${dayweeks}, ${daymonth} ${month}`


  return (
    <div className='main-conveter-content'>
      <div className="nav-container">
        <GiReceiveMoney className='logo-icon'/>
        <li className='logo'>curisy</li>
        <nav>
            <li><a href="">Operation</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Community</a></li>
            <li><a href="">Help</a></li>
        </nav>
      </div>
      <div className="content">
  <h2 className='content-h2'>Working yourself with your instant currency converter</h2>
  <h4>Bad Rates</h4>
  <p>You can come back later for better rate</p>
  <p>{FormatedDate} </p>
  <hr  className='hr'/>
  <h4>Elon has renamed twitter to x</h4>
  <p>You can come back later for better rate</p>
  <p>{FormatedDate} </p>
  <div className="discuss">
 <h4 className='discuss'>Discuss in Exchange Rate Community </h4>
 <FaArrowRightLong className='arrow'/>
 </div>
 </div>


    </div>
  )
}

export default ConverterContent
