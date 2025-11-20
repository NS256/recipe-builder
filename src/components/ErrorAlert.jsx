import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import '../styles/ErrorAlert.css';


export default function ErrorAlert({message, onClose}) {
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        // When message appears, start a timer to begin exit animation
        // after visibleDuration, then call onClose after exitDuration.
        const visibleDuration = 4000; // ms before starting exit
        const exitDuration = 400; // ms for exit animation

        setExiting(false);

        const startExit = setTimeout(() => setExiting(true), visibleDuration);
        const finish = setTimeout(() => {
            if (onClose) onClose();
        }, visibleDuration + exitDuration);

        return () => {
            clearTimeout(startExit);
            clearTimeout(finish);
        };
    }, [message, onClose]);

    return (
        <div className={`error-container ${exiting ? 'slide-out' : 'slide-in'}`}>
            <Alert variant='light' className='light-mode-err'>
                <img src="/icon.png" className="error-icon" alt="Recipe Builder icon" />
                <br className='mob-only' />
                Oops!&nbsp;
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