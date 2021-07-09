import React from "react";
import styles from './ImageGallaryItem.module.css'
import { v4 as uuidv4 } from "uuid";

const ImageGalleryItem = ({ images, taggleModal }) => {
 return (
  <>
   {images.map((image) => (
    <li className={styles.ImageGalleryItem} key={uuidv4()}>
     <img
      onClick={() => taggleModal(image.largeImageURL)}
      src={image.webformatURL}
      alt={image.tags}
      className={styles.ImageGalleryItem-image}
      id={image.id}
     />
    </li>
   ))}
  </>
 );
};

export default ImageGalleryItem;
