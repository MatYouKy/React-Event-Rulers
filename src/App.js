import React,{ useState, useContext, useEffect } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NavigationContext, navigation} from './context/NavigationContext';

import { Header } from './components/Header/Header';
import { Wedding } from './pages/wedding/Wedding';
import { Home } from './pages/Home/Home';
import { Navigation } from './components/Navigation/Navigation'
import { Footer } from './components/Footer/Footer';
import { ServiceSubPage } from './pages/ServiceSubPage/ServiceSubPage';

import './styles/Global.scss';


const App = () => {
  const {navList, serviceList} = useContext(NavigationContext)
  const [burgerToggle, setBurgerTogler] = useState(navigation.burgerToggle);
  const [burgerMenu, setBurgerMenu] = useState(navigation.burgerMenu)
  const handleChangeMenu = () =>{
    setBurgerTogler(!burgerToggle)
  }
  const handleWidth =() =>{
    let width = window.innerWidth
    if(width >= 992){
      handleBurgerMenu(true)
    }else{
      handleBurgerMenu(false)
    }
    return 
  }
  const handleBurgerMenu =(parametr) => {
    setBurgerMenu(parametr);
  }

  useEffect(()=>{
    window.addEventListener('resize', handleWidth)
  })
  return (
    <main className="app">
      <NavigationContext.Provider value={{
        burgerToggle,
        burgerTogglerState: handleChangeMenu,
        navList,
        serviceList,
        burgerMenu
      }}>
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
      </NavigationContext.Provider>
    </main>
  
  );
}

export default App;
