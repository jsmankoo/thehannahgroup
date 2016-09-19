import {fromJS} from 'immutable';
export default (state = fromJS({
  copyright: 'CalBre #01469441 Copyright © 2016 JoAnne Gilliam.',
  information: 'Information deemed reliable but not guaranteed or verified.',
  facebook: '//facebook.com',
  twitter: '//twitter.com',
  instagram: '//instagram'
}), action) => {
  switch (action.type) {
    case 'FOOT_INIT':
      console.log(action);
      return state
        .set('copyright', action.copyright)
        .set('information', action.information)
        .set('facebook', action.facebook)
        .set('twitter', action.twitter);
    default:
      return state;
  }
};
