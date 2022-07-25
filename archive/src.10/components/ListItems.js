import React from "react";
import ListItem from "./ListItem";

function ListItems(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <ul className="list-group">
        {props.items.map((item) => <ListItem {...item} />)}
      </ul>
    </>
  )
};

export default ListItems;
