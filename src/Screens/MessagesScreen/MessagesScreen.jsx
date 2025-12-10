import React from "react";
import "./MessagesScreen.css";
import ContactSideBar from "../../Components/ContactSideBar/ContactSideBar";
import { useContext } from "react";
import { ContactDetailContext } from "../../Context/ContactDetailContext";

function MessagesScreen() {
  const { contactSelected, loadingContact, loadingContactById } =
    useContext(ContactDetailContext);

  /* console.log(contactSelected, loadingContact); */
  return (
    <div className="messages-container">
      <ContactSideBar />
      {loadingContact ? (
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
          <p className="message-wrapper">
            {contactSelected.last_message_content}
          </p>
        </div>
      )}
    </div>
  );
}

export default MessagesScreen;
