import React from "react";
import "./ChatScreen.css";
import ContactSideBar from "../../Components/ContactSideBar/ContactSideBar";
import { useContext } from "react";
import { ContactListContext } from "../../Context/ContactListContext";

function ChatScreen() {
  const { loadingContactListState } = useContext(ContactListContext);
  if (loadingContactListState) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <img className="loading-img" src="/chat-logo.svg" alt="" />
          <span className="loading-home">Chatty</span>
        </div>
      </div>
    );
  }
  return (
    <div className="chat-list-container">
      <ContactSideBar />
      <div className="home-message-container">
        <div className="home-message-content">
          <img className="home-message-img" src="/chat-logo.svg" alt="" />
          <p className="home-message">
            Para chetear, hacé click en tu lista de contactos
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
