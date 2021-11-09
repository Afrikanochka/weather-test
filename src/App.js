import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Container from './components/container/Container';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import SearchForm from './components/searchForm/SearchForm';
import Weather from './components/weather/Weather';
import { getWeather } from './redux/operations';
import { getCurrentSearch, getCurrentWeather, getError, getLoading } from './redux/selectors';



function App() {
  const [query, setQuery] = useState('');
  const name = useSelector(getCurrentSearch)
  const loader = useSelector(getLoading);
  const currentWeather = useSelector(getCurrentWeather);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name) {
      dispatch(getWeather(name))
    }
  }, [dispatch, name])

  useEffect(() => {
    if (currentWeather) {
      dispatch(getWeather(currentWeather.coord.lat, currentWeather.coord.lon))
    };
  }, [dispatch, currentWeather]);

  const handleSubmit = newSearch => {
    setQuery(newSearch);
  };

  return (
   
    <Container>
     
      <SearchForm onHandleSubmit={handleSubmit} />
      {/* <CurrentWeather />  */}
      <Weather name={query} />
      <ToastContainer autoClose={3700} position="bottom-center" />
    </Container>
  
  );
}

export default App;
