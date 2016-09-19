import {combineReducers, createStore} from 'redux';
import App from './Components/App';
import Nav from './Components/Nav';
import Menu from './Components/Menu';
import Jumbotron from './Components/Jumbotron';
import Featured from './Components/Featured';
import About from './Components/About';
import Contact from './Components/Contact';
import Foot from './Components/Foot';

const reducer = combineReducers({
  App,
  Nav,
  Menu,
  Jumbotron,
  Featured,
  About,
  Contact,
  Foot
});

const Store = createStore(reducer);

export default Store;
