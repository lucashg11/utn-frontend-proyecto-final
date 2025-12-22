import React from "react";
import "./ContactSearchForm.css";
import { IoIosSearch } from "react-icons/io";
function ContactSearchForm() {
  return (
    <div className="searchbar">
      <label htmlFor="search">
        <IoIosSearch className="search-icon" />

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
