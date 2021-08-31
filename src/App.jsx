import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Header } from './components/Header/Header';
import { Wedding } from './pages/wedding/Wedding';
import { Home } from './pages/Home/Home';
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';

import './styles/Global.scss';

export const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Navigation />
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/wedding" component={Wedding} />
      <Route component={Home} />
    </Switch>
    <MessengerCustomerChat 
      pageId="499290697138600"
      appId="385967879567945"
    />
    <Footer />
  </Router>
);
