import React from 'react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it('Should render title of the app', () => {
        const history = createMemoryHistory()
        const { getByText } = render(
            <Router history={history}>
            <App />
            </Router>
        )
        expect(getByText(/\bMeu Appa\b/i)).toBeInTheDocument();
    })
})