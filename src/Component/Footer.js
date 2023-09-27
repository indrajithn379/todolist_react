import React from "react";
const year = new Date();
const Footer = ({length}) => {
  return <footer>{length} List {length>0 ? "items" : "item"}</footer>;
};
export default Footer;
