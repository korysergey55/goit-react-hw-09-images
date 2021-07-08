import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
 static propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  taggleModal: PropTypes.func.isRequired,
 };
 
 componentDidMount() {
  window.addEventListener("keydown", this.handleEsc);
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
 }
 componentWillUnmount() {
  window.removeEventListener("keydown", this.handleEsc);
  const body = document.querySelector("body");
  body.style.overflow = "auto";
 }

 handleEsc = (e) => {
  if (e.code === "Escape") {
   this.props.taggleModal('');
  }
 };

 render() {
  return (
   <>
    <div className="Overlay" onClick={() => this.props.taggleModal('')}>
     <div className="Modal">
      <img src={this.props.largeImageURL} alt="pic" />
     </div>
    </div>
   </>
  );
 }
}

export default Modal;
