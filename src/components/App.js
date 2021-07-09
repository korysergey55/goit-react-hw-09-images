import React from "react";
import axios from "axios";
import { useState } from "react";

import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import Loader from "./loader/Loader";
import Modal from "./modal/Modal";


const KEY_API = "21698474-fb36d7b3400c91ab3d227d6db";
const BASE_URL = "https://pixabay.com/api/";

const App = () => {
 
 const [images, setImages] = useState([]);
 const [searchWord, setSearchWord] = useState("");
 const [currentPage, setCurrentPage] = useState(1);
 const [loading, setLoading] = useState(false);
 const [largeImageURL, setLargeImageURL] = useState("");
 const [err, setError] = useState("");

 const handleSearchProducts = async (searchWord, currentPage = 1) => {
  setLoading(true);

  try {
   const { data } = await axios.get(
    `${BASE_URL}?q=${searchWord}&page=${currentPage}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
   );
currentPage === 1
 ? setImages(data.hits)
 : setImages((prev) => [...prev, ...data.hits]);
   
   setSearchWord(searchWord);
   setCurrentPage((prev) => prev + 1);
  } catch (error) {
   setError(error);
  } finally {
   setLoading(false);

   window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
   });
  }
 };

 const changeSearchWord = (word) => {
  handleSearchProducts(word);
  setSearchWord(searchWord);
 };

 const showMore = async () => {
  handleSearchProducts(searchWord, currentPage);

 };

 const taggleModal = (bigImage) => {
  setLargeImageURL(bigImage);
 };
 return (
  <>
   <Searchbar changeSearchWord={changeSearchWord} />
   <ImageGallery images={images} taggleModal={taggleModal} />
   <Loader loading={loading} showMore={showMore} currentPage={currentPage} />
   {largeImageURL && (
    <Modal largeImageURL={largeImageURL} taggleModal={taggleModal} />
   )}
  </>
 );
};

export default App;

