import React from 'react';
import { RenderTableRows } from './RenderTableRows';
import { RenderTableheader } from './RenderTableheader';
const data = { students: [{ id: 1, name: 'Ola' }, { id: 2, name: 'Jordan' }, { id: 3, name: 'Ben' }] };
export function Data() {
  return (<table className='table table-striped'>
    <thead>
      <tr>
        <RenderTableheader data={data} />
      </tr>
    </thead>
    <tbody>
      <RenderTableRows data={data} />
    </tbody>
  </table>);
}
