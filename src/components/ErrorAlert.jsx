import React from 'react';
import Alert from 'react-bootstrap/Alert';
import '../styles/ErrorAlert.css';


export default function ErrorAlert({message}) {
    return (
        <div className='error-container'>
            <Alert variant='light' className='light-mode-err'>
                <img src="/icon.png" className="error-icon" alt="Recipe Builder icon" />
                <br className='mob-only' />
                Oops! 
                <br className='mob-only' />
                {message}
            </Alert>
            <Alert variant='secondary' className='dark-mode-err'>
                <img src="/icon.png" className="error-icon" alt="Recipe Builder icon" />
                <br className='mob-only' />
                Oops! 
                <br className='mob-only' />
                {message}
            </Alert>
        </div>
    );
}