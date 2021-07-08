import React, { Component } from 'react';
import PropTypes from "prop-types";

class Searchbar extends Component {
 static propTypes = {
  changeSearchWord: PropTypes.func.isRequired,
 };

 state = {
  searchWord: "",
 };

 saveInputValueToState = (evt) => {
  this.setState({
   [evt.target.name]: evt.target.value,
  });
 };

 handleSubmitForm = (evt) => {
  evt.preventDefault();
  this.props.changeSearchWord(this.state.searchWord);
 };

 render() {
  return (
   <>
    <header className="Searchbar">
     <form className="SearchForm" onSubmit={this.handleSubmitForm}>
      <button type="submit" className="SearchForm-button">
       <span className="SearchForm-button-label">Search</span>
      </button>

      <input
       onChange={this.saveInputValueToState}
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
 }
}

export default Searchbar;