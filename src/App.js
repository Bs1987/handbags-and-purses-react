import React from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";

function App() {
    return (
        <div>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button ButtonName={"To the Collection"}/>
                <Button ButtonName={"Shop all bags"}/>
                <Button ButtonName={"Pre-Order now!"}/>
            </nav>
            <main>
                <Product label={"Bestseller"} name={"The handy bag"} price={"€400,-"}/>
                <Product/>
                <Product/>
                <Product/>
            </main>
        </div>
    );
}

export default App;



