import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css'; 
import PropTypes from 'prop-types';
class ImageGalleryItem extends  Component{
  render() {
    const { webformatURL } = this.props.image;
    const {onClick} = this.props;
    return (
      <li className={css.ImageGalleryItem}>
       <img
         src={webformatURL}
         alt=""
         className={css.ImageGalleryItemimage}
         onClick={onClick}
       />
     </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

