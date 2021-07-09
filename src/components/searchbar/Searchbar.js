import React, { useState } from "react";
import PropTypes from "prop-types";

const Searchbar = ({ changeSearchWord }) => {
 const [state, setState] = useState('');

 const saveInputValueToState = (evt) => {
  setState({
   [evt.target.name]: evt.target.value,
  });
 };

 const handleSubmitForm = (evt) => {
  evt.preventDefault();
  changeSearchWord(state.searchWord);
 };
 return (
  <>
   <header className="Searchbar">
    <form className="SearchForm" onSubmit={handleSubmitForm}>
     <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
     </button>

     <input
      onChange={saveInputValueToState}
      className="SearchForm-input"
      type="text"
      name="searchWord"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
     />
    </form>
   </header>
  </>
 );
};
Searchbar.propTypes = {
 changeSearchWord: PropTypes.func.isRequired,
};

export default Searchbar;
