import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
import {Motion, spring, presets} from 'react-motion';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import Prismic from 'prismic.io';

//import Components
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';
import Jumbotron from '../Jumbotron/Jumbotron';
import Featured from '../Featured/Featured';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Foot from '../Foot/Foot';

const mapStateToProps = ({Menu, App}) => {
  return {
    menuOpen: Menu.get('open'),
    title: App.get('title'),
    description: App.get('description'),
    loaded: App.get('loaded'),
    delay: App.get('delay'),
    jumbotronLoaded: App.get('initJumbotron')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle(){
      dispatch({type: 'MENU_TOGGLE'});
    },
    appInit(){
      dispatch({type: 'APP_INIT'});
    },
    initJumbotron(){
      dispatch({type: 'APP_JUMBOTRON_INIT'});
    },
    helmetInit(title, description){
      dispatch({
        type: 'APP_TITLE',
        title,
        description
      });
    },
    addProperty(photo, address, price, link){
      dispatch({
        type: 'FEATURED_ADD_PROPERTY',
        photo,
        address,
        price,
        link
      });
    },
    aboutInit(background, name, tablet, mobile, markdown){
      dispatch({
        type: 'ABOUT_INIT',
        background,
        name,
        tablet,
        mobile,
        markdown
      });
    },
    contactInit(name, markdown, mobile, email, address){
      dispatch({
        type: 'CONTACT_INIT',
        name,
        markdown,
        mobile,
        email,
        address
      });
    },
    footInit(copyright, information, facebook, twitter){
      dispatch({
        type: 'FOOT_INIT',
        copyright,
        information,
        facebook,
        twitter
      });
    }
  };
};

@connect(mapStateToProps, mapDispatchToProps)
@Radium
class App extends Component {
  componentDidMount(){
    const {delay, appInit, initJumbotron, addProperty, aboutInit, contactInit, footInit, helmetInit} = this.props;
    this.timeout = setTimeout(appInit, delay)
    setTimeout(initJumbotron, 1000);
    Prismic.api('https://hannah.prismic.io/api')
      .then((api)=>api.query(Prismic.Predicates.at('my.index.uid', 'index')))
      .then(({results}) => {
        console.log(results[0].data);
        // Init Properties
        results[0].data['index.Properties'].value.forEach(({Address, Link, Photo, Price}) => {
          addProperty(
            Photo.value.main.url,
            Address.value,
            Price.value,
            Link.value.url
          );
        });
        helmetInit(
          results[0].data['index.PageTitle'].value,
          results[0].data['index.PageDescription'].value
        );
        aboutInit(
          results[0].data['index.BackgroundImage'].value.main.url,
          results[0].data['index.Name'].value,
          results[0].data['index.Profile Pic'].value.main.url,
          results[0].data['index.Mobile Pic'].value.main.url,
          results[0].data['index.Paragraph'].value
        );
        contactInit(
          results[0].data['index.botHeading'].value,
          results[0].data['index.botParagragh'].value,
          {
            link: results[0].data['index.MobileLink'].value.url,
            text: results[0].data['index.Mobile'].value
          },
          {
            link: results[0].data['index.EmailLink'].value.url,
            text: results[0].data['index.Email'].value
          },
          {
            link: results[0].data['index.AddressLink'].value.url,
            text: results[0].data['index.Address'].value
          }
        );
        footInit(
          results[0].data['index.Copyright'].value,
          results[0].data['index.Information'].value,
          results[0].data['index.facebook'].value.url,
          results[0].data['index.Twitter'].value.url
        );
        $(".owl-carousel").owlCarousel({
          dots: true,
          autoPlay: true,
          items: 3,
          itemsCustom: [[0, 1], [768,2], [1024,3]]
        });
      });

  }
  componentWillUnmount(){
  }
  render(){
    const {title, description, menuOpen, loaded, toggle, jumbotronLoaded} = this.props;
    return (
      <Motion
        style={{
          opacity: loaded ? spring(1, presets.noWobble) : spring(0, presets.noWobble)
        }}>
        {
          ({opacity}) => (
            <StyleRoot style={[{opacity}]}>
              <Helmet
                title={title}
                meta={[
                  {name: 'description', content: description}
                ]}
              />
              <Nav />
              <Menu LinkOveride={true} />
              <Jumbotron load={jumbotronLoaded} />
              <Featured />
              <About />
              <Contact />
              <Foot />
            </StyleRoot>
          )
        }
      </Motion>
    );
  }
};

export default App;
