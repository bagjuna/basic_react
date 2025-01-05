import './App.css';

import {useEffect, useState} from "react";

function App() {
    const [value, setValue] = useState(0);


    useEffect(() => {
        console.log('useEffect');

        document.body.addEventListener('click', () => {
            console.log('click body');
        })
        return () => {
            console.log('useEffect cleanup');
        }
    });

    return (
        <div>
            <h1>vale: {value}</h1>
            <button onClick={() => {
                setValue(value + 1);
                console.log('Increase value', value);
            }}
            >Increase value
            </button>
            <button onClick={()=>{
                setValue(0);
            }}>
                Reset value
                </button>
        </div>
    );
}

export default App;
