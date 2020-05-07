function PetList (props) {
    const list = props.data.pets.map((pet, index) => <li key={index}>{index}-{pet}</li>);

    return(<ul>{list}</ul>);
}

export default PetList;