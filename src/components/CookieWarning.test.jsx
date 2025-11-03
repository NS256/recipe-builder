import React from 'react';
import { describe, it, expect, vi } from 'vitest';

// jest-dom expects a global `expect` to exist when it is imported. Vitest
// provides `expect` as a module export, so expose it to the global scope
// before importing jest-dom.
globalThis.expect = expect;

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';
import CookieWarning from './CookieWarning';

describe('CookieWarning', () => {

    const setCookieAllowed = vi.fn();

    it('CookieWarning included in App', () => {
        render(<App></App>);
        expect(CookieWarning).toBeInTheDocument();
    });

    it('CookieWarning rendered when cookies are not allowed', () => {
        render(<CookieWarning cookiesAllowedState={false} setCookiesAllowedState={setCookieAllowed} />);
        expect(screen.getByText(/To give you the best experience and temporarily store your last recipe we need to use cookies. By clicking "Accept All," you consent to our use of cookies./i)).toBeInTheDocument();
    });

    it('CookieWarning not rendered when cookies are allowed', () => {
        render(<CookieWarning cookiesAllowedState={true} setCookiesAllowedState={setCookieAllowed} />);
        expect(screen.queryByText(/To give you the best experience and temporarily store your last recipe we need to use cookies. By clicking "Accept All," you consent to our use of cookies./i)).not.toBeInTheDocument();
    });
});