import React from "react";
import "./ContactSearchForm.css";
function ContactSearchForm() {
  return (
    <div className="searchbar">
      <img className="searchbar-icon" src="/search.svg" alt="" />
      <input
        className="searchbar-input"
        placeholder="Buscar conversación o contacto"
      ></input>
    </div>
  );
}

export default ContactSearchForm;
