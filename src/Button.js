
function Button(props) {
    return (
        <button disabled={props.disable}
            type="button"
                onClick={() => console.log(`${props.ButtonName}`)}>
            {props.ButtonName}
        </button>
    );
}

export default Button;