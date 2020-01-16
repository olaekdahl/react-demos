import React from 'react';
import DetailsButton from './DetailsButton';
export function RenderTableRows(props) {
  const showDetails = (event, name)=>{
    console.log(name);
  }
  const [state, setState] = React.useState({ students: [] });
  React.useEffect(() => {
    setState(props.data);
  }, []);
  const rows = state.students.map((student) => {
    const { id, name } = student;
    return (
    <tr key={id} data-item={id} onClick={rowDetails}>
      <td>{id}</td>
      <td>{name}</td>
      <td><DetailsButton name={name} /></td>
    </tr>);
  });
  return (rows);
}

//{ this.state.showMessage && (<div>hello world!</div>) }
function rowDetails(event){
  // console.log(event.currentTarget);
  //console.log(event.currentTarget.getAttribute('data-item'));
}
