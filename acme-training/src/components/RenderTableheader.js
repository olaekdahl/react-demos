import React from 'react';
export function RenderTableheader(props) {
  const headerKeys = Object.keys(props.data.students[0]);
  const header = headerKeys.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
  return header;
}
