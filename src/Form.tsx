import React, { useState } from "react";
import { AddItem } from "./types";

interface AddItemProps {
  addItem: AddItem;
}

const Form = (props: AddItemProps) => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const { addItem } = props;

  // handle add item to the list
  const handleSubmit = () => {
    // handle missing information, may use schema later
    if (title === undefined || title === "") {
      if (date === undefined || date === "") alert("Title and Date missing");
      else alert("Title missing");
    } else {
      if (date === undefined || date === "") alert("Date missing");
      else {
        addItem({ title: title, date: date, key: -1 });
        setTitle("");
        setDate("");
      }
    }
  };

  return (
    <div
      style={{
        marginBottom: 20,
        border: "1px solid black",
        padding: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: 400,
      }}
    >
      <b>Title</b>
      <input
        value={title}
        style={{ width: 300, height: 20, marginBottom: 10 }}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <b>Deadline</b>
      <input
        value={date}
        style={{ width: 300, height: 20, marginBottom: 10 }}
        onChange={(e) => setDate(e.target.value)}
        type="date"
      />
      <button
        style={{
          height: 30,
          width: 60,
          backgroundColor: "green",
          color: "white",
          margin: 10,
          cursor: "pointer",
        }}
        type="submit"
        onClick={() => handleSubmit()}
      >
        Add
      </button>
    </div>
  );
};

export default Form;
