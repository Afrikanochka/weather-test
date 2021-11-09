import DateTime from '../dateTime/DateTime';
import tempIcon from '../../images/ico-temperature.png';
import windIcon from '../../images/wind.png';
import dropIcon from '../../images/drop.png';
import { DataViewStyled } from './DataViewStyled';


function DataView({
  weatherData: {
    name,
    country,
    temp,
    temp_min,
    temp_max,
    feels_like,
    humidity,
    description,
    icon,
    speed,
  },
}) {
  return (
    <DataViewStyled>
      <DateTime />
      <h1 className="title">
        Weather in {name}, {country}
      </h1>
      <div className="wrapper">
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="Weather icon"
          width="40"
          height="40"
          className="icon"
        />
        <p className="description">{description}</p>
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
            <b>Feels like:</b> {feels_like} °С
          </li>
          <li>
            <b>Current:</b> {temp} °С
          </li>
          <li>
            <b>High:</b> {temp_max} °С
          </li>
          <li>
            <b>Low:</b> {temp_min} °С
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
          <b>Wind Speed:</b> {speed} м/с
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
          <b>Humidity:</b> {humidity} %
        </p>
      </div>
    </DataViewStyled>
  );
}

export default DataView;