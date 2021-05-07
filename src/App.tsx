import React, { useState } from "react";
import Item from "./Item";
import Form from "./Form";
import { DB } from "./db";
import { ItemInfo, DeleteItem, AddItem, EditItem, ShowItem } from "./types";

const App = () => {
  const [items, setItems] = useState<Array<ItemInfo>>(DB);
  const [count, setCount] = useState(0);

  // add item
  const addItem: AddItem = (newItem) => {
    newItem.key = count;
    setCount(count + 1);
    console.log(
      "title: " +
        newItem.title +
        " date: " +
        newItem.date +
        " key: " +
        newItem.key
    );

    const arr = items.concat(newItem);
    setItems(arr);
  };

  // delete item
  const deleteItem: DeleteItem = (item) => {
    const arr = items.filter((i) => i.key !== item.key);
    // console.log(arr);
    setItems(arr);
  };

  // update at the right position instead of pushing
  const editItem: EditItem = (item) => {
    const idx = items.findIndex((i) => i.key === item.key);
    items[idx].title = item.title;
    items[idx].date = item.date;
    console.log(items);
    setItems(items);
  };

  const showItem: ShowItem = (item) => {
    alert(`
      Title: ${item.title}\n
      Deadline: ${item.date}\n
      Status: Not complete
    `);
  }

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <b style={{ fontSize: 50, marginBottom: 20 }}>To Do List</b>
      <Form addItem={addItem} />
      {items !== null ? (
        items.map((i) => (
          <Item item={i} deleteItem={deleteItem} editItem={editItem} showItem={showItem}/>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
