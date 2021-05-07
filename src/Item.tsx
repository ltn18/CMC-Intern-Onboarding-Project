import React, { useState } from "react";
import { ItemInfo, DeleteItem, EditItem, ShowItem } from "./types";

interface ItemProps {
  item: ItemInfo;
  deleteItem: DeleteItem;
  editItem: EditItem;
  showItem: ShowItem;
}

const Item = (props: ItemProps) => {
  const { item, deleteItem, editItem, showItem } = props;
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");

  const showEdit = () => {
    setEditing(!editing);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          width: 600,
          justifyContent: "space-between",
          height: 100,
          margin: 10,
          marginBottom: 0,
        }}
        key={item.key}
      >
        <div style={{ padding: 8 }}>
          <b>Title</b>
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: 200,
            }}
          >
            {item.title}
          </div>
          <b>Deadline</b>
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: 200,
            }}
          >
            {item.date}
          </div>
        </div>

        <div>
          <button
            style={{
              height: 50,
              backgroundColor: "blue",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => showEdit()}
          >
            Edit
          </button>
          <button
            style={{
              height: 50,
              backgroundColor: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => deleteItem(item)}
          >
            Delete
          </button>
          <button
            style={{
              height: 50,
              backgroundColor: "orange",
              color: "black",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => showItem(item)}
          >
            Show More
          </button>
        </div>
      </div>
      {editing ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            marginLeft: 10,
          }}
        >
          <b style={{ color: "red" }}>New Title</b>
          <input
            style={{ width: 300, height: 20, marginBottom: 5 }}
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <b style={{ color: "red" }}>New Deadline</b>
          <input
            style={{ width: 300, height: 20, marginBottom: 5 }}
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <button
            style={{
              height: 30,
              width: 60,
              backgroundColor: "yellow",
              color: "black",
              cursor: "pointer",
            }}
            type="submit"
            onClick={() => {
              editItem({ title: newTitle, date: newDate, key: item.key });
              setEditing(false);
            }}
          >
            <b>Update</b>
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Item;
