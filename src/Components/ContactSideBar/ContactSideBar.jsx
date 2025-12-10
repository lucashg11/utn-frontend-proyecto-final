import React from "react";
import "./ContactSideBar.css";

import ContactList from "../ContactList/ContactList";
import TopBar from "../TopBar/TopBar";
import ContactSearchForm from "../ContactSearchForm/ContactSearchForm";

function ContactSideBar() {
  /* console.log({ contactListState, loadingContactListState }); */

  return (
    <aside className="contact-sidebar">
      <TopBar />
      <ContactSearchForm />
      <ContactList />
    </aside>
  );
}

export default ContactSideBar;
