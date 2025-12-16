import React, { useContext } from "react";
import "./TopBar.css";
import { ContactListContext } from "../../Context/ContactListContext";

function TopBar() {
  const { addNewContact } = useContext(ContactListContext);

  return (
    <div className="topbar">
      <div className="topbar-header-left">
        <h1 className="topbar-title">Chatty</h1>
      </div>
      <div className="topbar-header-right">
        <button className="topbar-add-contact"></button>
        <img className="topbar-menu" src="/dots-vertical.svg" alt="open menu" />
      </div>
    </div>
  );
}

export default TopBar;
