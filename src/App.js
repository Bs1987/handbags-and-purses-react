import React from 'react';
import Button from "./Button";
import Product from "./Product";
import Tile from "./Tile";
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
                <Tile
                    title={"THE BRAND"}
                    paragraphs={["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur consequuntur corporis cumque dignissimos dolorem doloremque doloribus ducimus enim fugit ipsum iure, minima odit officiis possimus quod sint vitae voluptatum?"]}
                />
                <Tile
                    image={brand}
                    imageAlt={"Brand"}
                />
                <Tile
                image={ourStory}
                imageAlt={"Designers"}
                />
                <Tile
                title={"OUR STORY"}
                   paragraphs={["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos, facere fugiat harum, id in inventore iste pariatur quisquam quos rem repellendus repudiandae suscipit! Architecto delectus harum id itaque vero?"]}
                />
            </footer>
        </div>
    );
}

export default App;



