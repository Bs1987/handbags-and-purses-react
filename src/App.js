import React from 'react';
import './App.css';


function App() {
    return (
        <div>
            <h1>Handbags & Purses</h1>
            <nav>
                <button type="button"
                        onClick={() => console.log("To the collection")}>
                    To the collection
                </button>
                <button type="button"
                        onClick={() => console.log("Shop all bags")}>
                    Shop all bags
                </button>
                <button type="button"
                        onClick={() => console.log("Pre-order")}>
                    Pre-order
                </button>

            </nav>
        </div>
    );
}

export default App;



