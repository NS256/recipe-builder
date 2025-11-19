import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import CookieWarning from './components/CookieWarning';
import { CookieAllowedContext } from './contexts/CookieContext';
import {cookiesAllowed} from './utils/CookieUtils';
import Recipe from './components/Recipe';
import Welcome from './components/Welcome';
import ErrorAlert from "./components/ErrorAlert";


function App() {

  // console.log("App loaded");
  // console.log(cookiesAllowed());

  //state to feed into the Cookies allowed context
  const [cookiesAllowedState,setCookiesAllowedState] = useState(cookiesAllowed);
  const [errorMessage, setErrorMessage] = useState("");

  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const createError = (message) => {
    if (!message) return;

    setErrorMessage(message);

    // clear any previous timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // clear message after 5s once
    timeoutRef.current = setTimeout(() => {
      setErrorMessage('');
      timeoutRef.current = null;
    }, 3000);
  }

  return (
    <>
      {(errorMessage.length > 0) && <ErrorAlert message={errorMessage} />}
      <img src="/newBackgroundImage.jpg" className="background-image"/>
      <div className="app-container">
        <SpeedInsights/>
        <CookieAllowedContext.Provider value={cookiesAllowedState}>
          <Header />
          <CookieWarning cookiesAllowedState={cookiesAllowedState} setCookiesAllowedState={setCookiesAllowedState} />
          <main>
            <Router>
              <Routes>
                <Route path="/" element={<Welcome />}/>
                <Route path="/recipe" element={<Recipe cookiesAllowed={cookiesAllowedState} setErrorMessage={createError} />}/>
              </Routes>
              
            </Router>
          
          </main>
        </CookieAllowedContext.Provider>
      </div>
    </>
  )
}

export default App;
