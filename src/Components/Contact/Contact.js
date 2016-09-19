import React, {Component} from 'react';
import Radium from 'radium';
import marked from 'marked';
import {connect} from 'react-redux';

import Styles from './Styles';

const Contact = ({name, markdown, mobile, email, address}) => {
  return (
    <div id='contact' className='Contact' style={[Styles.base]}>
      <h2 style={[Styles.header]}>{name}</h2>
      <div style={[Styles.markdown]}
        dangerouslySetInnerHTML={{__html: marked(markdown)}} />
      <div style={[Styles.icons]}>
        <a href={mobile.link} style={[Styles.icon]} title={mobile.text}  key={'mobile'}>
          <i style={[Styles.icon.mobile]} className='btr bt-mobile' />
          <h5 style={[Styles.text]}>{mobile.text}</h5>
        </a>
        <a href={email.link} style={[Styles.icon]} title={email.text}  key={'email'}>
          <i style={[Styles.icon.email]} className='btr bt-paper-plane' />
          <h5 style={[Styles.text]}>{email.text}</h5>
        </a>
        <a target='_blank' href={address.link} style={[Styles.icon]} title={address.text} key={'address'} >
          <i style={[Styles.icon.address]} className='btr bt-map' />
          <h5 style={[Styles.text]} dangerouslySetInnerHTML={{__html: address.text }}></h5>
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = ({Contact}) => {
  return {
    name: Contact.get('name'),
    markdown: Contact.get('markdown'),
    mobile: Contact.get('mobile').toJS(),
    email: Contact.get('email').toJS(),
    address: Contact.get('address').toJS()
  };
}
const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  Radium(
    Contact
  )
);
