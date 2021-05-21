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
            <main>
                <article>
                <span>
                    Red label
                </span>
                    <img src="assets/bag_1.png" alt=""/>
                    <p>
                        bag name
                    </p>
                    <h4>
                        price
                    </h4>
                </article>
                <article>
                <span>
                    Red label
                </span>
                    <img src="assets/bag_1.png" alt=""/>
                    <p>
                        bag name
                    </p>
                    <h4>
                        price
                    </h4>
                </article>
                <article>
                <span>
                    Red label
                </span>
                    <img src="assets/bag_1.png" alt=""/>
                    <p>
                        bag name
                    </p>
                    <h4>
                        price
                    </h4>
                </article>
            </main>
        </div>
    );
}

export default App;



