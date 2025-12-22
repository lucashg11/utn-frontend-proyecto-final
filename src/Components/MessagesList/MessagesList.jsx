import React, { useContext } from "react";
import { ContactDetailContext } from "../../Context/ContactDetailContext";
import AddNewMessage from "../../Components/AddNewMessage/AddNewMessage";
import "./MessagesList.css";

function MessagesList() {
  const { contactSelected } = useContext(ContactDetailContext);

  return (
    <div className="conversation-container">
      <div className="messages-list">
        {contactSelected.messages.map((contact) =>
          contact.send_by_me ? (
            <div className="conversation send-by-me">
              <div className="message-pill" key={contact.message_id}>
                <span className="message-content">
                  {contact.message_content}
                </span>
                <span className="message-timestamp">10:00</span>
              </div>
            </div>
          ) : (
            <div className="conversation ">
              <div className="message-pill" key={contact.message_id}>
                <span className="message-content">
                  {contact.message_content}
                </span>
                <span className="message-timestamp">10:00</span>
              </div>
            </div>
          )
        )}
      </div>
      <AddNewMessage />
    </div>
  );
}

export default MessagesList;
