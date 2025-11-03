import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import CookieWarning from './components/CookieWarning';
import { CookieAllowedContext } from './contexts/CookieContext';
import {cookiesAllowed} from './utils/CookieUtils';
import Recipe from './components/Recipe';

function App() {

  console.log("App loaded");
  console.log(cookiesAllowed());

  //state to feed into the Cookies allowed context
    const [cookiesAllowedState,setCookiesAllowedState] = useState(cookiesAllowed);

  return (
    <>
      <CookieAllowedContext.Provider value={cookiesAllowedState}>
        <Header />
        <CookieWarning cookiesAllowedState={cookiesAllowedState} setCookiesAllowedState={setCookiesAllowedState} />
        <main>
        <Recipe />
        </main>
      </CookieAllowedContext.Provider>
    </>
  )
}

export default App;
