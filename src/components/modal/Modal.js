import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";


const Modal = ({ largeImageURL, taggleModal }) => {
 useEffect(() => {
  window.addEventListener("keydown", handleEsc);
  const body = document.querySelector("body");
  body.style.overflow = "hidden";

  return () => {
   window.removeEventListener("keydown", handleEsc);
   const body = document.querySelector("body");
   body.style.overflow = "auto";
  };
 });

 const handleEsc = (e) => {
  if (e.code === "Escape") {
   taggleModal("");
  }
 };
 return (
  <>
   <div className="Overlay" onClick={() => taggleModal("")}>
    <div className="Modal">
     <img src={largeImageURL} alt="pic" />
    </div>
   </div>
  </>
 );
};

Modal.propTypes = {
 largeImageURL: PropTypes.string.isRequired,
 taggleModal: PropTypes.func.isRequired,
};

export default Modal;

