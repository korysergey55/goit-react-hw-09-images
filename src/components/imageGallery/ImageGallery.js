import React from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ images, taggleModal }) => {
 return (
  <>
   <ul className="ImageGallery">
    <ImageGalleryItem images={images} taggleModal={taggleModal} />
   </ul>
  </>
 );
};

ImageGallery.propTypes = {
 images: PropTypes.arrayOf(PropTypes.shape({
     webformatURL: PropTypes.string.isRequired,
     tags: PropTypes.string.isRequired,
     id: PropTypes.number.isRequired,
 })),
 taggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
