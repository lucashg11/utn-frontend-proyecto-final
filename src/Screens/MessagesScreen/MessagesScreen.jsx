import React, { useContext } from "react";
import { ContactDetailContext } from "../../Context/ContactDetailContext";
import { ContactListContext } from "../../Context/ContactListContext";
import ContactSideBar from "../../Components/ContactSideBar/ContactSideBar";
import MessagesList from "../../Components/MessagesList/MessagesList";
import "./MessagesScreen.css";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router";

function MessagesScreen() {
  const { contactSelected } = useContext(ContactDetailContext);
  const { loadingContactListState } = useContext(ContactListContext);
  return (
    <div className="messages-container">
      <div className="messages-sidebar">
        <ContactSideBar />
      </div>
      {loadingContactListState ? (
        <div className="loading-content">
          <p className="loading-text">Cargando...</p>
        </div>
      ) : (
        <div className="loaded-content">
          <div className="message-topbar">
            <Link to="/">
              <IoMdArrowBack className="back-icon" />
            </Link>
            <img
              className="contact-avatar"
              src={contactSelected.contact_avatar}
              alt=""
            />
            <h2 className="topbar-contact-name">
              {contactSelected.contact_name}
            </h2>
          </div>
          <MessagesList />
        </div>
      )}
    </div>
  );
}

export default MessagesScreen;
