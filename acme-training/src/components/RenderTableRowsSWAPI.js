import React from 'react';
import axios from 'axios';
import DetailsButton from './DetailsButton';

const api = `https://swapi.co/api/people/?format=json`;
export function RenderTableRows(props) {
  const [state, setState] = React.useState({ results: [] });
  const [details, setDetails] = React.useState({show: true, name: ''});
  
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        api,
      );
      setState(result.data);
    };
    fetchData();
  });
  const rows = state.results.map((item, idx) => {
    const { name, homeworld } = item;
    return (
    <tr key={idx} data-item={idx} onClick={rowDetails}>
      <td>{name}</td>
      <td>{homeworld}</td>
      <td><DetailsButton key={idx} name={name} setDetails={setDetails} /></td>
    </tr>);
  });
  return (<React.Fragment>{rows}</React.Fragment>);
}

//{ this.state.showMessage && (<div>hello world!</div>) }
function rowDetails(event){
  // console.log(event.currentTarget);
  //console.log(event.currentTarget.getAttribute('data-item'));
}
