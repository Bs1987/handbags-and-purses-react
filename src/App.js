import React from 'react';
import Button from "./Button";
import Product from "./Product";
import handyBag from "./assets/bag_1.png";
import stylishBag from "./assets/bag_2.png";
import simpleBag from "./assets/bag_3.png";
import trendyBag from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";
import './App.css';

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
                <Product
                    label={"Bestseller"}
                    image={handyBag}
                    productName={"The handy bag"}
                    price={"€400,-"}
                />
                <Product/>
                <Product/>
                <Product/>
            </main>
        </div>
    );
}

export default App;



