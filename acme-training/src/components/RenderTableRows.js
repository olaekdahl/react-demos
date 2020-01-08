import React from 'react';
export function RenderTableRows(props) {
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
    </tr>);
  });
  return rows;
}

function rowDetails(event){
  // console.log(event.currentTarget);
  console.log(event.currentTarget.getAttribute('data-item'));
}
