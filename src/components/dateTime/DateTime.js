import { useState, useEffect, useRef } from 'react';
import { Month, Weekday, Day } from '../../services/date';
import clockIcon from '../../images/clock.png';
import { DateTimeStyled } from './DateTimeStyled'

function Clock() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => tick(), 1000);

    return () => {
      stop();
    };
  }, []);

  const tick = () => {
    setTime(new Date().toLocaleTimeString('en-US', { timeStyle: 'short' }));
  };

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <DateTimeStyled>
      <img
        className="icon"
        src={clockIcon}
        alt="time icon"
        width="38"
        height="38"
      />
      <div className="wrapper">
        <p className="time">{time}</p>
        <p className="date">
          {Weekday}, {Month} {Day}
        </p>
      </div>
    </DateTimeStyled>
  );
}

export default Clock;
