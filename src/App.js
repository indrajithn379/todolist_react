import React, { useState } from "react";
import "./App.css";
import Content from "./Component/Content";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState(""); // State for the new item input

  const handleCheck = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    
  };

  const handleAddItem = () => {
    if (newItem !== "") {
      const newItemObject = {
        id: Date.now(), // Assign a unique ID using the current timestamp
        checked: false,
        item: newItem,
      };
      setItems([...items, newItemObject]);
      setNewItem(""); // Clear the input field
    }
  };

  return (
    <div className="App">
      <Header
        title="To Do List"
        newItem={newItem}
        setNewItem={setNewItem}
        handleAddItem={handleAddItem}
      />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
