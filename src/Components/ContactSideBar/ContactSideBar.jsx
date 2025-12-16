import React from "react";
import "./ContactSideBar.css";

import ContactList from "../ContactList/ContactList";
import TopBar from "../TopBar/TopBar";
import ContactSearchForm from "../ContactSearchForm/ContactSearchForm";

function ContactSideBar() {
  return (
    <aside className="contact-sidebar">
      <TopBar />
      <ContactSearchForm />
      <ContactList />
    </aside>
  );
}

export default ContactSideBar;
