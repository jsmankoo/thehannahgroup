import Color from 'color';
import {color} from '../../Styles';

module.exports = {
  base: {
    width: '100%',
    height: 'auto',
    minHeight: '50px',
    padding: '0px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'space-between',
    backgroundColor: '#f3f3f3',
    '@media (min-width: 767px)':{
      flexDirection: 'row'
    }
  },
  copyright: {
    textAlign: 'center',
    padding: '20px 0px',
    width: '100%',
    fontSize: '12px',
    '@media (min-width: 767px)':{
      width: '40%',
      textAlign: 'left',
      padding: '0px',
    }
  },
  developer: {
    textAlign: 'center',
    padding: '20px 0px',
    width: '100%',
    fontSize: '13px',
    '@media (min-width: 767px)':{
      width: '40%',
      textAlign: 'right',
      padding: '0px',
    }
  },
  socialMedia: {
    padding: '0px 0px',
    textAlign: 'center',
    flexDirection: 'row',
    width: '100%',
    '@media (min-width: 767px)':{
      width: '20%',
      padding: '0px',
    },
    a: {
      padding: '15px'
    }
  }
};
