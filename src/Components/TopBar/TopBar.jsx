import React, { useContext } from "react";
import "./TopBar.css";
import { ContactListContext } from "../../Context/ContactListContext";
import { IoMdPersonAdd } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { Tooltip } from "react-tooltip";

function TopBar() {
  const { addNewContact } = useContext(ContactListContext);

  return (
    <div className="topbar">
      <div className="topbar-header-left">
        <h1 className="topbar-title">Chatty</h1>
      </div>
      <div className="topbar-header-right">
        <button className="addcontact-icon-wrapper">
          <Tooltip id="addcontact-tooltip" />
          <IoMdPersonAdd
            className="addcontact-icon"
            data-tooltip-id="addcontact-tooltip"
            data-tooltip-content="Agregar contacto"
            data-tooltip-place="bottom"
          />
        </button>
        <button className="menu-icon-wrapper">
          <Tooltip id="menu-tooltip" className="tooltip" />
          <HiDotsVertical
            className="menu-icon"
            data-tooltip-id="menu-tooltip"
            data-tooltip-content="Abrir Menu"
            data-tooltip-place="bottom"
          />
        </button>
      </div>
    </div>
  );
}

export default TopBar;
