import React from 'react';
import ListItems from './ListItems';

function List(props) {
  const purchased = [];
  const notPurchased = [];

  for (let item of props.items) {
    item.purchased ? purchased.push(item) : notPurchased.push(item);
  }

  return (
    <>
      <ListItems items={purchased} title="Purchased" />
      <ListItems items={notPurchased} title="Not Purchased" />
    </>
  );
}

export default List;
