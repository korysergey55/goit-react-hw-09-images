import axios from "axios";
import { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import Loader from "./loader/Loader";
import Modal from "./modal/Modal";

class App extends Component {
 state = {
  images: [],
  searchWord: "",
  currentPage: 0,
  loading: false,
  largeImageURL: "",
  shawModal: false,
 };

 componentDidUpdate(prevProps, prevState) {
  if (
   prevState.searchWord !== this.state.searchWord ||
   prevState.currentPage !== this.state.currentPage
  ) {
   this.handleSearchProducts();
  }
 }

 handleSearchProducts = async () => {
  const KEY_API = "21698474-fb36d7b3400c91ab3d227d6db";
  const BASE_URL = "https://pixabay.com/api/";

  this.setState({ loading: true });

  try {
   const { data } = await axios.get(
    `${BASE_URL}?q=${this.state.searchWord}&page=${this.state.currentPage}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
   );
   this.setState((prevState) => ({
    images: [...prevState.images, ...data.hits],
    loading: true,
   }));
  } 
  catch (error) {
   console.log(error);
  } 
  finally {
   this.setState({ loading: false });

   window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
   });
  }
 };

 changeSearchWord = (word) => {
  this.setState({ searchWord: word, images: [], currentPage: 1 });
 };

 showMore = () => {
  this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
 };

 taggleModal = (bigImage) => {
  this.setState({ largeImageURL: bigImage });
 };

 render() {
  
  return (
   <>
    <Searchbar changeSearchWord={this.changeSearchWord} />
    <ImageGallery images={this.state.images} taggleModal={this.taggleModal} />
    <Loader
     loading={this.state.loading}
     showMore={this.showMore}
     currentPage={this.state.currentPage}
    />
    {this.state.largeImageURL && (
     <Modal
      largeImageURL={this.state.largeImageURL}
      taggleModal={this.taggleModal}
     />
    )}
   </>
  );
 }
}

export default App;
