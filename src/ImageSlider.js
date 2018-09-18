import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Bomb from './Bomb';

export default class ImageSlider extends Component {
    constructor(){
      super()
      this.state = {
        currentSlideIndex: 0
      }
    }

    render(){
      return `I am on slide ${this.state.currentSlideIndex}`
    }
}
