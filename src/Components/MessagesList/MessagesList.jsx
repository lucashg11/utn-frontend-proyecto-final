import React, { useContext } from "react";
import { ContactDetailContext } from "../../Context/ContactDetailContext";
import "./MessagesList.css";

function MessagesList() {
  const { contactSelected } = useContext(ContactDetailContext);

  return (
    <div className="messages-list">
      {contactSelected.messages.map((contact) => {
        return (
          <div className="message-pill" key={contact.message_id}>
            <p>{contact.message_content}</p>
            <p>{contact.message_state}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MessagesList;
