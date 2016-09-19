import Color from 'color';
import {colors, header, fonts} from '../../Styles';

module.exports = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '768px',
    height: 'auto',
    minHeight: '100vh',
    margin: 'auto',
    padding: '50px 0px',
    textAlign: 'center',
    '@media (min-width: 767px)':{
      padding: '100px 0px'
    }
  },
  header: {...header,
    margin: '0 0 25px'
  },
  markdown: {
    width: '100%',
    padding: '25px 0px',
    height: 'auto',
    maxWidth: '280px',
    '@media (min-width: 767px) and (max-width: 850px)':{
      maxWidth: '700px',
    },
    '@media (min-width: 851px)':{
      maxWidth: '750px',
    }
  },
  icons: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (min-width: 767px)': {
      flexDirection: 'row',
      maxWidth: '700px',
    }
  },
  icon: {
    display: 'block',
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    padding: '15px 0px',
    color: Color(colors.black).rgbString(),
    ':hover':{
      color: Color(colors.red).rgbString(),
    },
    '@media (min-width: 767px)':{
      width: '33%'
    },
    mobile: {
      fontSize: '25px',
    },
    email: {
      fontSize: '25px',
    },
    address: {
      fontSize: '25px',
    }
  },
  text: {
    paddingTop: '5px',
    fontSize: '14px',
    fontFamily: fonts.main
  },
  logo: {
    display: 'block',
    margin: '25px auto',
    width: '218px',
    height: 'auto',
    maxWidth: '90%'
  }
};
