import {fromJS} from 'immutable';

export default (state = fromJS({
  open: false,
  data: [
    {
      name: 'HOME',
      link: '/',
      border: false,
      hover: false,
    },
    {
      name: 'PROPERTIES',
      border: true,
      hover: false,
      open: false,
      submenu: [
        {
          name: 'FEATURED',
          link: '#featured',
          hover: false,
          full: true
        },
        {
          name: 'MLS SEARCH',
          link: 'http://idx.hklane.com/homesearch/51244',
          hover: false,
          full: true
        },
        {
          name: 'OPEN HOMES',
          link: 'http://idx.hklane.com/openhomes/51244',
          hover: false,
          full: true
        }]
    },
    {
      name: 'JO ANNE',
      link: '#about',
      border: true,
      hover: false
    },
    {
      name: 'CONTACT',
      link: '#contact',
      border: true,
      hover: false
    }
  ]
}), action) => {
  switch (action.type) {
    case 'MENU_TOGGLE':
      return state.update('open', open => !open);
    case 'MENU_CATEGORY_HOVER':
      return state.update('data', data =>
          data.map( (data, index) =>
            data.update('hover', hover => index === action.index && !hover)
          )
        );
    case 'MENU_SUBMENU_HOVER_TOGGLE':
      return state.update( 'data', data =>
          data.map( (data, index) =>
            data.update('submenu', submenu =>
              action.category !== index ? submenu : submenu.map( (submenu, index) =>
                submenu.update('hover', hover => action.submenu === index && !hover)
              )
            )
          )
        );
    case 'MENU_CATEGORY_TOGGLE':
      return state.update('data', data =>
          data.map( (data, index) =>
            data.update('open', open => index === action.index && !open)
          )
        );
    default:
      return state;
  }
};
