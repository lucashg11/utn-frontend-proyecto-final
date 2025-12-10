/* import Counter from "./Components/Counter/Counter"; */
import "./globals.css";

import { Routes, Route } from "react-router";
import ChatScreen from "./Screens/ChatScreen/ChatScreen";
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen";
import ContactListContextProvider from "./Context/ContactListContext";
import ContactDetailContextProvider from "./Context/ContactDetailContext";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<ContactListContextProvider />}>
          <Route path="/" element={<ChatScreen />} />
          <Route path="/:contact_id" element={<ContactDetailContextProvider />}>
            <Route path="/:contact_id/messages" element={<MessagesScreen />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
