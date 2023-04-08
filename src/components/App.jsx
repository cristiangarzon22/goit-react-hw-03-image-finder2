import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button'; 
import Modal from './Modal/Modal';
import css from './App.module.css';
class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps,prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }
  fetchImages = () => {
    const { query, page } = this.state;

    const API_KEY = '33770960-9441e00aea4c2d2fce88c05cc';
    const BASE_URL = 'https://pixabay.com/api/';
    const url = `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=12`;

    this.setState({ loading: true });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ loading: false }));
  };

  handleFormSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  handleLoadMoreClick = () => {
    this.fetchImages();
  };

  handleImageClick = largeImageURL => {
    this.setState({ showModal: true, largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    const { images, loading, showModal, largeImageURL } = this.state;

    return (
      <div className={css.App}>
        <Searchbar  onSubmit={this.handleFormSubmit} valor={this.state.query}/>
        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.handleImageClick} />
        )}
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMoreClick} />
        )}
        {showModal && (
          <Modal onClick={this.handleCloseModal}>
            <img src={largeImageURL} alt="" onClick={this.handleCloseModal}/>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
