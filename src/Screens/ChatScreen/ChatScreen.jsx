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
          <p className="loading-message">Chatty</p>
        </div>
      </div>
    );
  }
  return (
    <div className="chat-list-container">
      <ContactSideBar />
    </div>
  );
}

export default ChatScreen;
