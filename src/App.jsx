import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import CookieWarning from './components/CookieWarning';
import { CookieAllowedContext } from './contexts/CookieContext';
import {cookiesAllowed} from './utils/CookieUtils';
import Recipe from './components/Recipe';
import Welcome from './components/Welcome';


function App() {

  console.log("App loaded");
  console.log(cookiesAllowed());

  //state to feed into the Cookies allowed context
    const [cookiesAllowedState,setCookiesAllowedState] = useState(cookiesAllowed);

  return (
    <>
      <SpeedInsights/>
      <CookieAllowedContext.Provider value={cookiesAllowedState}>
        <Header />
        <img src="/chopping-board-background.jpg" className="background-image"/>
        <CookieWarning cookiesAllowedState={cookiesAllowedState} setCookiesAllowedState={setCookiesAllowedState} />
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Welcome />}/>
              <Route path="/recipe" element={<Recipe />}/>
            </Routes>
            
          </Router>
        
        </main>
      </CookieAllowedContext.Provider>
    </>
  )
}

export default App;
