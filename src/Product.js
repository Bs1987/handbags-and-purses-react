

function Product(props) {
    return (
        <div>
            <article>
                <span>
                    {props.label}
                </span>
                <img src={props.image} alt={props.productName}/>
                <p>
                    {props.productName}
                </p>
                <h4>
                    {props.price}
                </h4>
            </article>
        </div>
    );
}

export default Product;