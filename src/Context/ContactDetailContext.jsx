import { useState, useEffect, createContext } from "react";
import { Outlet, useParams } from "react-router";
import { getContactById } from "../services/contactService";

export const ContactDetailContext = createContext();

const ContactDetailContextProvider = () => {
  const paramsURL = useParams();
  const contact_id = paramsURL.contact_id;
  const [contactSelected, setContactSelected] = useState(null);
  const [loadingContact, setLoadingContact] = useState(true);

  function loadContactById() {
    setLoadingContact(true);
    setTimeout(function () {
      const contact = getContactById(contact_id);
      setContactSelected(contact);
      setLoadingContact(false);
    }, 500);
  }

  useEffect(loadContactById, [paramsURL.contact_id]);

  const providedValues = {
    contactSelected,
    loadingContact,
    loadContactById,
  };
  return (
    <ContactDetailContext.Provider value={providedValues}>
      <Outlet />
    </ContactDetailContext.Provider>
  );
};

export default ContactDetailContextProvider;
