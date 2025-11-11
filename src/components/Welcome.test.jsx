import React from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Welcome from './Welcome';
describe('test Welcome component', () => {
    it('all elements rendered',() => {
        render(<BrowserRouter><Welcome /></BrowserRouter>);
        expect(screen.getByText("Welcome to Recipe Builder!")).toBeInTheDocument();
        expect(screen.getByText("Ready to start building?")).toBeInTheDocument();
        expect(screen.getByText("Let's get cooking!")).toBeInTheDocument();
    });

    
})