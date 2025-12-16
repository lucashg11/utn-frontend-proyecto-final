import React, { useContext } from "react";
import { ContactDetailContext } from "../../Context/ContactDetailContext";
import ContactSideBar from "../../Components/ContactSideBar/ContactSideBar";
import MessagesList from "../../Components/MessagesList/MessagesList";
import AddNewMessage from "../../Components/AddNewMessage/AddNewMessage";
import "./MessagesScreen.css";
import { ContactListContext } from "../../Context/ContactListContext";

function MessagesScreen() {
  const { contactSelected } = useContext(ContactDetailContext);
  const { loadingContactListState } = useContext(ContactListContext);
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="messages-container">
      <ContactSideBar />
      {loadingContactListState ? (
        <div className="loading-content">
          <p>Cargando...</p>
        </div>
      ) : (
        <div className="loaded-message">
          <div className="message-topbar">
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
          <AddNewMessage />
        </div>
      )}
    </div>
  );
}

export default MessagesScreen;
