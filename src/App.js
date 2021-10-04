import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Genre from './Components/Genre/Genre';
import NotFound from './Components/NotFound/NotFound';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('./tools.JSON')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/service">
            <Service>
              <Card></Card>
            </Service>
          </Route>
          <Route exact path="/genre">
            <Genre></Genre>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
