import {fromJS} from 'immutable';

export default (state = fromJS({
  background: '',
  name: '',
  pic: {
    tablet: '',
    mobile: ''
  },
  markdown: ''
}), action) => {
  switch (action.type) {
    case 'ABOUT_INIT':
      return state
        .set('background', action.background)
        .set('name', action.name)
        .setIn(['pic', 'tablet'], action.tablet)
        .setIn(['pic', 'mobile'], action.mobile)
        .set('markdown', action.markdown);
    default:
      return state;
  }
};
