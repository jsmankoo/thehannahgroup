import Color from 'color';
import {colors, align} from '../../Styles';

module.exports = {
  base: {
    clipPath: 'polygon(100% 0, 100% 93%, 50% 100%, 0 93%, 0 0)',
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    '@media (max-width: 1024px) and (min-width: 767px)': {
      height: '768px'
    }
  },
  videos: {...align('v'),
    minWidth: '100%',
    minHeight: '100%',
    zIndex: -10000
  },
  tint: {
    height: '100%',
    width: '100%',
    backgroundColor: Color(colors.black).clearer(0.75).hslString()
  },
  headline:{...align('v'),
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    color: Color(colors.white).rgbString()
  }
};
