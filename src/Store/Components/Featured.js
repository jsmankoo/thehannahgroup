import {fromJS} from 'immutable';
export default (state = fromJS({
  mlsLink: 'http://idx.hklane.com/homesearch/51244',
  properties: []
}), action) => {
  switch (action.type) {
    case 'FEATURED_LINK_INIT':
      return state.set('mlsLink', action.link);
    case 'FEATURED_ADD_PROPERTY':
      return state.update('properties', (properties) => (
        properties.push(fromJS({
          photo: action.photo,
          address: action.address,
          price: action.price,
          link: action.link
        }))
      ));
    default:
      return state;
  }
};
