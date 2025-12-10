import React from "react";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <h1 className="topbar-title">Chatty</h1>
      <div className="topbar-options">
        <img
          className="topbar-add-contact"
          src="/new-contact.svg"
          alt="open camera"
        />
        <img className="topbar-menu" src="/dots-vertical.svg" alt="open menu" />
      </div>
    </div>
  );
}

export default TopBar;
