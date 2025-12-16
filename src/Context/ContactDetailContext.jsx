import { useState, useEffect, createContext, useContext } from "react";
import { Outlet, useParams } from "react-router";
import { ContactListContext } from "./ContactListContext";

export const ContactDetailContext = createContext();

const ContactDetailContextProvider = () => {
  const paramsURL = useParams();
  const contact_id = paramsURL.contact_id;
  /* const [contactSelected, setContactSelected] = useState(null);
  const [loadingContact, setLoadingContact] = useState(true); */
  const { contactListState, getContactById, updateContactById } =
    useContext(ContactListContext);
  const contactSelected = getContactById(contact_id);

  function addNewMessage(content) {
    const new_message = {
      message_id:
        contactSelected.messages[contactSelected.messages.length - 1]
          .message_id + 1,
      message_content: content,
      message_state: "NOT_SEND",
      message_created_at: new Date(),
      send_by_my: true,
    };

    const contactSelectedCloned = { ...contactSelected };
    contactSelectedCloned.messages.push(new_message);

    updateContactById(contactSelectedCloned, contact_id);
  }

  const providedValues = {
    contactSelected,
    addNewMessage,
  };
  return (
    <ContactDetailContext.Provider value={providedValues}>
      <Outlet />
    </ContactDetailContext.Provider>
  );
};

export default ContactDetailContextProvider;
