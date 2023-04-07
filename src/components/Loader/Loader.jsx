import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css';
class Loader extends Component {
  render() {
    return (
      <div className={css.audio}> 
      <Audio/>
      </div>
    );
  }
}

export default Loader;
