import ContactList from "./components/ContactList"
import { useState } from "react"
import SelectedContact from "./components/SelectedContact"

const App = () => {
 const [selectedContactId, setSelectedContactId] = useState(null)

 return (
  <div id="container">
    <div id="navbar">
      <div>Currently selected: {selectedContactId ? `Contact ID ${selectedContactId}` : 'None'}</div>
    </div>
    <div id="contacts-list">
      <ContactList setSelectedContactId={setSelectedContactId} />
    </div>
    <div id="selected-contact">
      {selectedContactId && (
        <SelectedContact 
          selectedContactId={selectedContactId} 
          setSelectedContactId={setSelectedContactId} 
        />
      )}
    </div>
  </div>
);
};

export default App
