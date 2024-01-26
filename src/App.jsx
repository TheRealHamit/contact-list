import ContactList from "./components/ContactList.jsx"
import './App.css'
import { useState } from "react";
import SelectedContact from "./components/SelectedContact.jsx";

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/"

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  return (
    <>
    <div>
      {selectedContactId ? <SelectedContact API_URL={API_URL} selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/> : <ContactList API_URL={API_URL} setSelectedContactId={setSelectedContactId}/>}
    </div>
    </>
  )
}

export default App;
