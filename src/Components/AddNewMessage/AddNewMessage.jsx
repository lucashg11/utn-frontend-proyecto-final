import React, { useContext } from "react";
import { ContactDetailContext } from "../../Context/ContactDetailContext";

function AddNewMessage() {
  const { addNewMessage } = useContext(ContactDetailContext);
  function handleSubmitNewMessage(event) {
    event.preventDefault();
    const form = event.target;
    const message = form.mensaje.value;
    addNewMessage(message);
    form.reset();
  }
  return (
    <form onSubmit={handleSubmitNewMessage}>
      <label htmlFor="mensaje"></label>
      <textarea id="mensaje"></textarea>
      <button>enviar</button>
    </form>
  );
}

export default AddNewMessage;
