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
                <Button
                    ButtonName={"To the Collection"}
                    disable={false}
                />
                <Button
                    ButtonName={"Shop all bags"}
                    disable={false}
                />
                <Button
                    ButtonName={"Pre-Order now!"}
                    disable={true}
                />
            </nav>
            <main>
                <Product
                    label={"Bestseller"}
                    image={handyBag}
                    productName={"The handy bag"}
                    price={"€400,-"}
                />
                <Product
                    label={"Bestseller"}
                    image={stylishBag}
                    productName={"The stylish bag"}
                    price={"€250,-"}
                />
                <Product
                    label={"New Collection"}
                    image={simpleBag}
                    productName={"The simple bag"}
                    price={"€300,-"}
                />
                <Product
                    label={"New Collection"}
                    image={trendyBag}
                    productName={"The trendy bag"}
                    price={"€150,-"}
                />
            </main>
            <footer>
                <section>The brand</section>
                <section>Image</section>
                <section>Our story</section>
                <section>Image</section>
            </footer>
        </div>
    );
}

export default App;



