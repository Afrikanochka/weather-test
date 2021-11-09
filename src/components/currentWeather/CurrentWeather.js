import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentWeather } from '../../redux/selectors';
import tempIcon from '../../images/ico-temperature.png';
import windIcon from '../../images/wind.png';
import dropIcon from '../../images/drop.png';
import { DataViewStyled } from '../dataView/DataViewStyled';


function CurrentWeather () {

  const { name, main, wind, weather } = useSelector(getCurrentWeather);
  
   return (
    <DataViewStyled>
      
      <h1 className="title">
        Weather in {name}
      </h1>
      <div className="wrapper">
        <img
          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
          alt="Weather icon"
          width="40"
          height="40"
          className="icon"
        />
        <p className="description">{weather[0].description}</p>
      </div>
      <div className="wrapper">
        <img
          src={tempIcon}
          alt="Thermometer"
          width="40"
          height="40"
          className="icon"
        />
        <ul className="description">
          <li>
            <b>Feels like:</b> {main.feels_like} °С
          </li>
          <li>
            <b>Current:</b> {main.temp} °С
          </li>
          <li>
            <b>High:</b> {main.temp_max} °С
          </li>
          <li>
            <b>Low:</b> {main.temp_min} °С
          </li>
        </ul>
      </div>

      <div className="wrapper">
        <img
          src={windIcon}
          alt="Wind Speed"
          width="40"
          height="40"
          className="icon"
        />
        <p className="description">
          <b>Wind Speed:</b> {wind.speed} м/с
        </p>
      </div>
      <div className="wrapper">
        <img
          src={dropIcon}
          alt="Humidity"
          width="40"
          height="40"
          className="icon"
        />
        <p className="description">
          <b>Humidity:</b> {main.humidity} %
        </p>
      </div>
    </DataViewStyled>
  );
}


export default CurrentWeather;