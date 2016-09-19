import {fromJS} from 'immutable';
export default (state = fromJS({
  loaded: false,
  delay: 100,
  initJumbotron: false,
  title: 'App',
  description: 'description'
}), action) => {
  switch (action.type) {
    case 'APP_INIT':
      return state.set('loaded', true);
    case 'APP_JUMBOTRON_INIT':
      return state.set('initJumbotron', true);
    case 'APP_TITLE':
      return state.set('title', action.title).set('description', action.description);
    default:
      return state;
  }
};
