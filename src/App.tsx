import {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);


        return () => clearInterval(intervalId);
    }, []);

    return (
        <time className="time" dateTime={currentTime.toISOString()}>
            {currentTime.toLocaleString()}
        </time>
    )
}

export default App
