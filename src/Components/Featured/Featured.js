import React, {Component} from 'react';
import Radium, {Style} from 'radium';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';
import marked from 'marked';

import Styles from './Styles';

const Featured = ({mls, properties}) => {
  return (
    <div id='featured' className='Featured' style={[Styles.base]}>
      <div style={[Styles.wrapper]}>
        <h2 style={[Styles.header]}>
          FEATURED PROPERTIES
          <a href={mls} style={[Styles.mls]}>SEARCH THE MLS</a>
        </h2>
        <div
          id={'featuredProperties'}
          className='owl-carousel'>
          {
            properties.map(({photo, address, link, price}, index)=>(
              <div className={`item`} key={link} >
                <a href={link} key={link} style={{
                  display: 'block',
                  margin: 'auto',
                  padding: '0px 12.5px',
                  color: '#525252',
                  ':hover':{
                    opacity: 0.9
                  }
                }}>
                  <img src={photo} style={{
                    display: 'block',
                    margin: 'auto',
                    width: '440px',
                    maxWidth: '100%'
                  }}/>
                  <div
                    style={{
                      display: 'block',
                      margin: 'auto',
                      width: '440px',
                      maxWidth: '100%',
                      textAlign: 'center',
                      fontFamily: 'trajan-pro-3',
                      fontWeight: '600',
                      padding: '15px 0px',
                      '@media (min-width: 768px)':{
                        textAlign: 'left'
                      }
                    }}
                    dangerouslySetInnerHTML={{__html: marked(address)}}
                    />
                  <div style={{
                    display: 'block',
                    margin: 'auto',
                    fontSize: '18px',
                    padding: '0px',
                    width: '440px',
                    maxWidth: '100%',
                    letterSpacing: '1px',
                    fontFamily: 'trajan-pro-3',
                    fontWeight: 600,
                    textAlign: 'center',
                    '@media (min-width: 768px)':{
                      textAlign: 'left'
                    }
                  }}>{price}</div>
                </a>
              </div>
            ))
          }
        </div>
        <Style
          scopeSelector="#featuredProperties"
          rules={{
            p: {
              padding: 0
            },
            '.owl-controls': {
              margin: '25px auto'
            }
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({Featured}) => {
  return {
    mls: Featured.get('mlsLink'),
    properties: Featured.get('properties').toJS()
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
    Featured
  )
);
