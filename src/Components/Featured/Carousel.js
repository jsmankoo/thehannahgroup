import React, {Component} from 'react';
import Radium from 'radium';
import raf from 'raf';
import {Motion, spring, presets} from 'react-motion';

import Styles from './Styles';

@Radium
class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      transform: 0
    };
  }
  componentDidMount = () => {
  }

  componentWillUnount = () => {
  }
  render(){
    const {transform} = this.state;
    const {data, offset, style, imgStyle} = this.props;
    return (
      <div />
    );
  }
}

export default Carousel;
