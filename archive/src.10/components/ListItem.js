import React from 'react';

function ListItem({ id, name }) {
  return (
    <li className='list-group-item' key={id}>
      {name}
    </li>
  )
}

export default ListItem;
