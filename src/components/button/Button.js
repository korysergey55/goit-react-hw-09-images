import React from 'react';
import styles from "./Button.module.css"

const Button = ({ showMore }) => {
 return (
  <button className={styles.Button} onClick={() => showMore()}>
   Show More
  </button>
 );
};

export default Button;