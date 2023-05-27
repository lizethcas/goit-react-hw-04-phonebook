import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/contactForm/contactForm";
import ContactList from "./components/contactList/contactList";
import Filter from "./components/filter/filter";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [usernumber, setUsernumber] = useState("");
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const saveData = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setUsername(value);
    } else if (name === "number") {
      setUsernumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userId = nanoid();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = { userId, name, number };
      setContacts((prevContacts) => [...prevContacts, newContact]);
      setUsername("");
      setUsernumber("");
    }
  };

  const handleDelete = (id) => {
    const updateContacts = contacts.filter((contact) => contact.userId !== id);
    setContacts(updateContacts);
  };
  const handleSearchChange = (e) => {
    setFilter( e.target.value );
  };
  const filterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    !storedContacts || storedContacts.length === 0
      ? localStorage.setItem("contacts", JSON.stringify(contacts))
      : setContacts(storedContacts);
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <>
      <section className="section">
        <ContactForm
          name={username}
          number={usernumber}
          saveData={saveData}
          handleSubmit={handleSubmit}
        />
        <div className="contacts__container">
          <h2>Contact list</h2>
          {contacts.length != 0 ? (
            <>
              <Filter onSearchChange={handleSearchChange} />
              <ContactList
                data={filterContacts()}
                handleDelete={handleDelete}
              />
            </>
          ) : (
            <h3>No contacts given</h3>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
