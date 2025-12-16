import React, { useContext } from "react";
import "./ContactList.css";
import { Link } from "react-router";
import { ContactListContext } from "../../Context/ContactListContext";

function ContactList() {
  const { contactListState } = useContext(ContactListContext);

  return (
    <div className="contact-list">
      {contactListState.map(function (contact) {
        return (
          <Link
            to={"/" + contact.contact_id + "/messages"}
            key={contact.contact_id}
            className="message-container"
          >
            <img
              src={contact.contact_avatar}
              alt={contact.contact_name}
              className="contact-avatar"
            />
            <div className="message-info">
              <div className="message-header">
                <h2 className="contact-name">{contact.contact_name}</h2>
                {/* <p className="message-time">{contact.last_message_created_at}</p> */}
                <p className="message-time">10:00</p>
              </div>
              <div className="message-content">
                <p className="message">{contact.last_message_content}</p>
                {contact.contact_unseen_messages > 0 && (
                  <span className="unseen-badge">
                    {contact.contact_unseen_messages}
                  </span>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ContactList;
