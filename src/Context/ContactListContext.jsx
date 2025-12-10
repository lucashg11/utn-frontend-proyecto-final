import { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router";
import { getContactList } from "../services/contactService";

export const ContactListContext = createContext();

const ContactListContextProvider = () => {
  const [contactListState, setContactListState] = useState([]);
  const [loadingContactListState, setLoadingContactListState] = useState(true);

  function loadContactList() {
    setTimeout(() => {
      const contact_list = getContactList();
      setContactListState(contact_list);
      setLoadingContactListState(false);
    }, 1000);
  }

  useEffect(loadContactList, []);

  const providedValues = {
    contactListState,
    loadingContactListState,
    loadContactList,
  };
  return (
    <ContactListContext.Provider value={providedValues}>
      <Outlet />
    </ContactListContext.Provider>
  );
};

export default ContactListContextProvider;
