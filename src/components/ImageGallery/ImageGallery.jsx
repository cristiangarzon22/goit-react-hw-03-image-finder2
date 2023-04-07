import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
  };
  render() {
    const { images,onClick } = this.props;
    return (
      <div className="galley">
        <ul className={css.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              image={{ id, webformatURL, largeImageURL }}
              onClick={() => onClick(largeImageURL)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ImageGallery;
