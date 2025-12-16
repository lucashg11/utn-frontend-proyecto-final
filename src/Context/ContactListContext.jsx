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

  function getContactById(contact_id) {
    for (const contact of contactListState) {
      if (Number(contact.contact_id) === Number(contact_id)) {
        return contact;
      }
    }
  }

  function updateContactById(contact_to_update, contact_id) {
    const new_contact_list = contactListState.map((contact) => {
      if (Number(contact.contact_id) === Number(contact_id)) {
        return contact_to_update;
      }
      return contact;
    });
    setContactListState(new_contact_list);
  }

  useEffect(loadContactList, []);

  function addNewContact(name) {
    const new_contact = {
      contact_id: contactListState[contactListState.length - 1].contact_id + 1,
      contact_name: name,
      contact_avatar: "",
      contact_unseen_messages: 0,
      contact_message_content: "",
      last_message_state: "NOT-SEEN",
      last_message_created_at: new Date(),
    };
    const contactListCloned = { ...contactListState };
    contactListCloned.push(new_contact);
    setContactListState(contactListCloned);
  }

  const providedValues = {
    contactListState,
    loadingContactListState,
    loadContactList,
    getContactById,
    updateContactById,
  };

  return (
    <ContactListContext.Provider value={providedValues}>
      <Outlet />
    </ContactListContext.Provider>
  );
};

export default ContactListContextProvider;
