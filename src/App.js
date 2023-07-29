
import Nav from './nav';
import Img from './img-cards';
import Footer from './footer';
import About from './about';
import Audio from './audio';
import Upload from './upload';
import Document from './document';
import Image from './image';
import Video from './video'
import Login from './logIn';
import Register from './register';
import Contact from './contact';
import Profile from './profile';
import Settings from './settings';
import ForgotPassword from './forgotPassword';
import Wrapper from './wrapper';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './style.css';
import Terms from './terms-and-condition';

function App() {
  return (
    <>
    <Router>
    <Nav />
    <Switch>
      <Route exact path='/'>        
        <Wrapper />
        <Img />
        <Footer />
      </Route>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/contact'>
        <Contact />
      </Route>

      <Route path='/profile'>
        <Profile />
      </Route>

      <Route path='/settings'>
        <Settings />
      </Route>

      <Route path='/terms-and-condition'>
        <Terms />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/register'>
        <Register />
      </Route>

      <Route path='/forgotPassword'>
        <ForgotPassword />
      </Route>

      <Route path='/audio'>
        <Audio />
      </Route>

      <Route path='/document'>
        <Document />
      </Route>

      <Route path='/image'>
        <Image />
      </Route>

      <Route path='/video'>
        <Video />
      </Route>
      
      <Route path='/upload'>
        <Upload />
      </Route>

    </Switch>
    </Router>
   
    </>
  );
}

export default App;
