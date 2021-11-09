import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { currentSearch } from '../../redux/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { SearchFormStyled } from './SearchFormStyled';

function SearchForm({ onHandleSubmit }) {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.info('😱 Please enter a value for search city!');
    }
    onHandleSubmit(query);
    dispatch(currentSearch())
    setQuery('');
  };

  const onChange = e => {
    setQuery(e.currentTarget.value.toLowerCase())
  }

  return (
    <SearchFormStyled>
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search city..."
          onChange={onChange}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </SearchFormStyled>
  );
}

SearchForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
