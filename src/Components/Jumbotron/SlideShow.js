import React, {Component} from 'react';
import {Motion, spring, presets} from 'react-motion';
import Radium from 'radium';

import Styles from './Styles';

@Radium
class SlideShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    }
  }
  componentDidMount = () => {
    this.slide = setInterval(()=>{
      this.setState({
        index: (this.state.index + 1) % this.props.slides.length
      });
    }, 5000);
  }
  componentWillUnmount = () => {
    clearInterval(this.slide);
  }
  render(){
    const {slides} = this.props;
    return (
      <div className='SlideShow' style={[Styles.videos]}>
        {
          slides.map((slide, index) => (
            <Motion key={index} style={{
              opacity: this.state.index === index ? spring(1, presets.noWobble) : spring(0, presets.noWobble)
            }}>
              {
                ({opacity}) => (
                  <div style={[{
                    opacity: opacity,
                    position: 'absolute',
                    backgroundImage: `url('${slide}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100vh',
                    '@media (max-width: 1024px) and (min-width: 768px)':{
                      height: '768px'
                    }
                  }]}>
                  </div>
                )
              }
            </Motion>
          ))
        }
      </div>
    );
  }
}

export default SlideShow;
