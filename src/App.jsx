import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Wedding } from './pages/wedding/Wedding';
import { Home } from './pages/Home/Home';
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';
import { ServiceSubPage } from './pages/ServiceSubPage/ServiceSubPage';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './styles/Global.scss';

console.log(MessengerCustomerChat);
export const App = () => (
  <Router>
    <Navigation />
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/wedding" component={Wedding} />
      <Route path="/event" component={ServiceSubPage} />
      <Route component={Home} />
    </Switch>
    <Footer />
  </Router>
);
