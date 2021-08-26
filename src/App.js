import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Wedding } from './pages/wedding/Wedding';
import { Home } from './pages/Home/Home';
import { Navigation } from './components/Navigation/Navigation'
import { Footer } from './components/Footer/Footer';
import { ServiceSubPage } from './pages/ServiceSubPage/ServiceSubPage';

import './styles/Global.scss';


const App = () => (
    <main className="app">
      <Router> 
        <Navigation/>
        <section>
        <Header />
        <Switch>
          <Route path="/" exact> <Home/> </Route>
          <Route path="/wedding"><Wedding /></Route>
          <Route path="/event"><ServiceSubPage /></Route>
          <Route ><Home /></Route>
        </Switch>
        </section>
      <Footer />
      </Router>
    </main>
  );

export default App;
