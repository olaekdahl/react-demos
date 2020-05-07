let btnClick = (event, name) => {
    alert(`Button was clicked by ${name}.`);
    console.log(event);
}

export default function Button(props) {
    return(<button onClick={(event) => btnClick(event, 'Ola')}>{props.label}</button>);
}