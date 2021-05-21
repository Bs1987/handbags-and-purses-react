
function Button(props) {
console.log(props);
    return (
        <button type="button"
                onClick={() => console.log(`${props.ButtonName}`)}>
            {props.ButtonName}
        </button>
    );
}

export default Button;