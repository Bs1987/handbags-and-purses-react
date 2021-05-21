import React from 'react';
import './App.css';
import Button from "./Button";

function App() {
    return (
        <div>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button ButtonName={"To the Collection"}/>
                <Button ButtonName={"Shop all bags"}/>
                <Button ButtonName={"Pre-Order now!"}/>

            </nav>
        </div>
    );
}

export default App;



