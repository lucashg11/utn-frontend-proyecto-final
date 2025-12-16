import React from "react";
import "./ContactSearchForm.css";
function ContactSearchForm() {
  return (
    <div className="searchbar">
      <label htmlFor="search">
        <img className="searchbar-icon" src="/search.svg" alt="" />

        <input
          id="search"
          className="searchbar-input"
          placeholder="Buscar conversación o contacto"
        ></input>
      </label>
    </div>
  );
}

export default ContactSearchForm;
