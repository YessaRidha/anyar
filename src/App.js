import './App.css';
import Footer2 from './components/footer/footer2';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/home'
import ProductGrid from './components/product/product';
import About from './components/about'
import Login from './components/login/login'
import Accordion from './components/Accordion/Accordion';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

function App() {
  const top = () => {
    window.scrollTo(0, 0);
  };

  return (

    <div className="App">

      <Router>
        <Navbar />
        <button onClick={top} className='topbtn'><ExpandLessOutlinedIcon /></button>
        <Switch>
          <Route exact path="/">
            <Home />
            <br/>
            <About />
            <br id='product'/>
            <br/>
            <br/>
            <ProductGrid />
            <br id='faq'/>
            <br/>
            <br/>
            <Accordion />
            <br/>
          </Route>
        </Switch>
        <Route path="/login" compoent={Login} exact>
          <br/>
          <br/>
          <Login />
        </Route>
        <Footer2 />
      </Router>

    </div>

  );
}

export default App;
