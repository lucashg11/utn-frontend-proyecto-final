import React, { useContext } from "react";
import { ContactDetailContext } from "../../Context/ContactDetailContext";
import "./AddNewMessage.css";
import { FaPlus } from "react-icons/fa6";
import { LuSticker } from "react-icons/lu";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdAttachFile } from "react-icons/md";
import { Tooltip } from "react-tooltip";

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
      <div className="plus-icon-wrapper">
        <Tooltip id="plus-tooltip" />
        <FaPlus
          className="plus-icon"
          data-tooltip-id="plus-tooltip"
          data-tooltip-content="Adjuntar"
          data-tooltip-place="top"
        />
      </div>
      <div className="sticker-icon-wrapper">
        <Tooltip id="stickers-tooltip" />
        <LuSticker
          className="sticker-icon"
          data-tooltip-id="stickers-tooltip"
          data-tooltip-content="Stickers"
          data-tooltip-place="top"
        />
      </div>
      <label htmlFor="mensaje"></label>
      <input className="message-input" id="mensaje"></input>
      <div className="attach-icon-wrapper">
        <Tooltip id="attach-tooltip" />
        <MdAttachFile
          className="attach-icon"
          data-tooltip-id="attach-tooltip"
          data-tooltip-content="Adjuntar"
          data-tooltip-place="top"
        />
      </div>
      <button className="send-icon-wrapper">
        <Tooltip id="send-tooltip" />
        <RiSendPlaneFill
          className="send-icon"
          data-tooltip-id="send-tooltip"
          data-tooltip-content="Enviar"
          data-tooltip-place="top"
        />
      </button>
    </form>
  );
}

export default AddNewMessage;
