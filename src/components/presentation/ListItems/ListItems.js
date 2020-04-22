import React from "react";
import ListItem from "../ListItem/ListItem";

const ListItems = (props) => {
  const { filteredItem } = props;

  return filteredItem.map((item, indx) => {
    return <ListItem key={indx} item={item} indx={indx} />;
  });
};

export default ListItems;
