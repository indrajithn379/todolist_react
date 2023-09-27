import React from "react";

const Header = ({ title, newItem, setNewItem, handleAddItem }) => {


  return (
    <header>
      <img src="ic2.jpg" alt="" className="header-image" />
      <h2 id="title">{title}</h2>
      <input
        className="inputbox"
        type="text"
        placeholder="Enter your work!"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      
      <button id="bid" onClick={handleAddItem}>
        Add Item
      </button>
    </header>
  );
};

Header.defaultProps = {
  title: "To Do List",
};

export default Header;
