import React, { useContext } from 'react';
import '../styles/CookieWarning.css';
import { CookieAllowedContext } from '../contexts/CookieContext';

export default function CookieWarning({ cookiesAllowedState, setCookiesAllowedState }) {

    // If a context value is provided by a Provider, use it; otherwise fall back to the prop.
    const contextAllowed = useContext(CookieAllowedContext);
    const allowed = typeof contextAllowed !== 'undefined' ? contextAllowed : cookiesAllowedState;

    const handleCookieSet = (cookieAllow) => {
        // setter comes from props (prop drilling) — make sure this is passed in by parent
        if (typeof setCookiesAllowedState === 'function') {
            setCookiesAllowedState(cookieAllow);
        }

        if (cookieAllow) document.cookie = document.cookie + "__recipe-builder__cookies_allowed=true;"

        // hide cookieWarning on buttonClick
        const cookieWarning = document.querySelector('.cookie-warn-cont');
        if (cookieWarning) cookieWarning.classList.add('cookie-warn-hide');
    };

    return (
        <>
            {!allowed && (
                <div className='container cookie-warn cookie-warn-cont'>
                    <div className='container cookie-warn cookie-warn-header'>
                        <h2 id='cookie-warn-header'>Cookies</h2>
                    </div>
                    <div className='container cookie-warn cookie-warn-body'>
                        <p>
                            <strong>Hey there!</strong> To give you the best experience and temporarily store your last recipe we need to use cookies. By clicking "Accept All," you consent to our use of cookies.
                        </p>
                    </div>
                    <div className='container cookie-warn cookie-warn-buttons'>
                        <button id='allow-cookies' className='cookie-btn' type='button' onClick={() => handleCookieSet(true)}>Accept All</button>
                        <button id='deny-cookies' className='cookie-btn' type='button' onClick={() => handleCookieSet(false)}>Reject All</button>
                    </div>
                </div>
            )}
        </>
    );
}