import React from "react";

function Tile(props) {
    console.log(props);
    if (props.image) {
        return (
            <section>
                <img src={props.image} alt={props.imageAlt}/>
            </section>);
    } else {
        return (
            <section>
                <h2>{props.title}</h2>
                {props.paragraphs.map((paragraph, index) =>
                    <p key={index}>{paragraph}</p>
                )}
            </section>
        );
    }
}

export default Tile;