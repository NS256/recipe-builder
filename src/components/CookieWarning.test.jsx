import React from 'react';
import { test, describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import CookieWarning from './CookieWarning';

// jest-dom expects a global `expect` to exist when it is imported. Vitest
// provides `expect` as a module export, so expose it to the global scope
// before importing jest-dom.
globalThis.expect = expect;



describe('CookieWarning', () => {

    const setCookieAllowed = vi.fn();

    it('CookieWarning included in App', () => {
        const { container } = render(<App />);
        const cookieWarning = container.querySelector(".cookie-warn-cont");
        expect(cookieWarning).toBeInTheDocument();
    });

    it('CookieWarning rendered when cookies are not allowed', () => {
        render(<CookieWarning cookiesAllowedState={false} setCookiesAllowedState={setCookieAllowed} />);
        expect(screen.getByText(/To give you the best experience and temporarily store your last recipe we need to use cookies. By clicking "Accept All," you consent to our use of cookies./i)).toBeInTheDocument();
    });

    it('CookieWarning not rendered when cookies are allowed', () => {
        render(<CookieWarning cookiesAllowedState={true} setCookiesAllowedState={setCookieAllowed} />);
        expect(screen.queryByText(/To give you the best experience and temporarily store your last recipe we need to use cookies. By clicking "Accept All," you consent to our use of cookies./i)).not.toBeInTheDocument();
    });

    /* Tests to write
        Upon allowing cookies, element is no longer in the dom
        Upon rejecting cookies, element is no longer in teh dom
        Upon allowing cookies, cookie allow state is set to true
        Upon rejecting cookies, cookie allow state is set to false

    */
});