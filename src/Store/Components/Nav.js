import {fromJS} from 'immutable';

export default (state = fromJS({
  brand: 'The Hannah Group',
  hover: false,
  iconHover: false
}), action) => {
  switch (action.type) {
    case 'NAV_BRAND_HOVER':
      return state.update('hover', hover => !hover);
    case 'NAV_BRAND_ICON_HOVER':
      return state.update('iconHover', hover => !hover);
    default:
      return state;
  }
};
