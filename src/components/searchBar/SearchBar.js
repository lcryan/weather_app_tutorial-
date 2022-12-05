import React, {useState} from 'react';
import './SearchBar.css';


function SearchBar({setLocationHandler}) {

    const [query, setQuery] = useState('');
    function onFormSubmit(e)
    {
        e.preventDefault();
        setLocationHandler(query);
    }



    return (
        <form className="searchbar" onSubmit={onFormSubmit}>
      <input
          value={query}
          type="submit"
          name="search"
          onChange={event => setQuery(event.target.value)}
          placeholder="Zoek een stad in Nederland"
      />

      <button type="button">
        Zoek
      </button>
    </form>
    );
}

export default SearchBar;
