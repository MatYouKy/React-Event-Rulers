import React,{ useState, useContext } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {NavigationContext, navigation} from '../context/NavigationContext';

import Header from '../layouts/Header';
import Services from '../pages/Services';
import Wedding from '../pages/Wedding';
import Home from '../pages/Home';
import Navigation from './Navigation';
import AboutUs from '../pages/AboutUs';
import Footer from './Footer';
import '../styles/App.scss';




const App = () => {
  const [burgerToggle, setBurgerTogler] = useState(navigation.burgerToggle);
  const handleChangeMenu = () =>{
    setBurgerTogler(!burgerToggle)
  }
  const {navList, serviceList} = useContext(NavigationContext)




  return (
    <Router>
      <main className="app">
        <NavigationContext.Provider value={{
          burgerToggle,
          burgerTogglerState: handleChangeMenu,
          navList,
          serviceList
        }}>
        <Header />    
        <Navigation/>
        <Route path="/" exact> <Home/> </Route>
        <Route path="/home/#aboutUs" component={AboutUs}/>
        <Route path="/home/#services"><Services/></Route>
        <Route path="/wedding"><Wedding /></Route>
        <Footer />
        </NavigationContext.Provider>
      </main>
    </Router>
  );
  }

export default App;
