
function Tile(props) {
    console.log(props);
    if (props.image) {
        return (
            <section>
                <img src={props.image} alt="/"/>
            </section>);
    } else {
        return (
            <section>
                <h2>{props.title}</h2>
            </section>)
    }
}

export default Tile;