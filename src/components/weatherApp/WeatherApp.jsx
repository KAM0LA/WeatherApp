import React, { useState } from 'react'

import './weatherApp.css'

import search_icon from "../../assets/images/search.png"
import clear_icon from "../../assets/images/clear.png"
import cloud_icon from "../../assets/images/cloud.png"
import humidity_icon from "../../assets/images/humidity.png"
import drizzle_icon from "../../assets/images/drizzle.png"
import snow_icon from "../../assets/images/snow.png"
import rain_icon from "../../assets/images/rain.png"
import wind_icon from "../../assets/images/wind.png"


const WeatherApp = () => {

let api_key = "e5b588f0fe1bee48c27f70acf8518c2c";

const [wicon, setWicon] = useState(cloud_icon);

const search = async() => {

 const element = document.getElementsByClassName("cityInput");
 if (element[0].value === ""){
    return 0;
 }
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`
 let response = await fetch(url);
 let data = await response.json();

 const humidity = document.getElementsByClassName("humidity-precent");
 const wind = document.getElementsByClassName("wind-rate");
 const temperature = document.getElementsByClassName("weather-temp");
 const location = document.getElementsByClassName("weather-location");

 humidity[0].innerHTML = data.main.humidity+ "%";
 wind[0].innerHTML = Math.floor(data.wind.speed)+ "km/h";
 temperature[0].innerHTML = Math.floor(data.main.temp)+ "°c";
 location[0].innerHTML = data.name;

 if (data.weather[0].icon === "01d" ||  data.weather[0].icon === "01n" )
 {
  setWicon(clear_icon);
 }else if (data.weather[0].icon === "02d" ||  data.weather[0].icon === "02n" ){
  setWicon(cloud_icon);
 }else if (data.weather[0].icon === "03d" ||  data.weather[0].icon === "03n" ){
  setWicon(drizzle_icon);
 }else if (data.weather[0].icon === "04d" ||  data.weather[0].icon === "04n" ){
  setWicon(drizzle_icon);
 }else if (data.weather[0].icon === "09d" ||  data.weather[0].icon === "09n" ){
  setWicon(rain_icon);
 }else if (data.weather[0].icon === "10d" ||  data.weather[0].icon === "10n" ){
  setWicon(rain_icon);
 }else if (data.weather[0].icon === "13d" ||  data.weather[0].icon === "13n" ){
  setWicon(snow_icon);
 }else{
  setWicon(clear_icon);
 }

}
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search..." />
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} width={20} alt="" />
        </div>
      </div>
      <div className="weather-image">
          <img src={cloud_icon} alt="" width={300} />
        </div>
        <div className="weather-temp">24° c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="icon" width={60} />
            <div className="data">
               <div className="humidity-precent">64%</div>
               <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className="icon" width={60} />
            <div className="data">
               <div className="wind-rate">18 km/h</div>
               <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default WeatherApp
