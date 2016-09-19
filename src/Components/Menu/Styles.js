import Color from 'color';
import {colors, align} from '../../Styles';

module.exports = {
  base: {
    zIndex: 10000,
    position: 'fixed',
    top: '51px',
    right: '0px',
    width: '100%',
    height: 'auto',
    '@media (min-width: 768px)':{
      top: '50px',
      width: '300px',
      height: '100%',
      backgroundColor: Color(colors.red).clearer(0.25).rgbString()
    }
  },
  category: {
    backgroundColor: Color(colors.red).clearer(0.25).rgbString(),
    '@media (min-width: 768px)':{
      backgroundColor: 'transparent',
    },
    a: {
      display: 'block',
      width: '100%',
      height: '50px',
      lineHeight: '50px',
      textAlign: 'left',
      paddingLeft: '20px',
      position: 'relative',
      fontSize: '20px'
    },
    i: {...align('v'),
      fontSize: '30px',
      right: '20px',
      display: 'block',
      '@media (min-width: 768px)':{
        display: 'none'
      }
    }
  },
  border: {
    width: '100%',
    height: '1px',
    marginLeft: '0px',
    backgroundColor: Color(colors.white).rgbString(),
    '@media (min-width: 768px)':{
      width: '150px',
      marginLeft: '40px'
    }
  },
  submenu:{
    a: {
      display: 'block',
      width: '100%',
      height: '40px',
      lineHeight: '40px',
      textAlign: 'left',
      paddingLeft: '40px',
      position: 'relative',
      fontSize: '16px',
      '@media (min-width: 768px)':{
        height: '40px',
        lineHeight: '40px',
      }
    }
  }
};
