import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from './Searchbar.module.css'

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
   <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={handleSubmitForm}>
     <button type="submit" className={styles.SearchFormButton}>
      <span className={styles.SearchFormButtonLabel}>Search</span>
     </button>

     <input
      onChange={saveInputValueToState}
      className={styles.SearchFormInput}
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
