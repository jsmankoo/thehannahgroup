import {fromJS} from 'immutable';
export default (state = fromJS({
  name: 'REAL ESTATE QUESTIONS?',
  markdown: '### Generic Headingn\nsome paragraph',
  mobile: {
    link: '',
    text: ''
  },
  email: {
    link: '',
    text: ''
  },
  address: {
    link: '',
    text: ''
  }
}), action) => {
  switch (action.type) {
    case 'CONTACT_INIT':
      return state
        .set('name', action.name)
        .set('markdown', action.markdown)
        .update('mobile', mobile => mobile.set('link', action.mobile.link).set('text', action.mobile.text))
        .update('email', email => email.set('link', action.email.link).set('text', action.email.text))
        .update('address', address => address.set('link', action.address.link).set('text', action.address.text));
    default:
      return state;
  }
};
