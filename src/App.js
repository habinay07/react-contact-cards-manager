import React, { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const SEED = [
  {
    id: "seed-1",
    name: "Habinay P",
    title: "Web Developer",
    company: "",
    phone: "9363741656",
    email: "abihabinay@gmail.com",
    bio: "Builds clean, functional interfaces and enjoys turning ideas into working products.",
    avatar: "",
  },
  {
    id: "seed-2",
    name: "Grace Hopper",
    title: "Rear Admiral, Compiler Pioneer",
    company: "US Navy",
    phone: "(555) 019-4200",
    email: "grace@compile.dev",
    bio: "Turned 'the machine can't do that' into a to-do list.",
    avatar: "",
  },
  {
    id: "seed-3",
    name: "Alan Turing",
    title: "Mathematician",
    company: "Bletchley Park",
    phone: "(555) 041-1912",
    email: "alan@enigma.io",
    bio: "Asks whether machines can think, then builds one to find out.",
    avatar: "",
  },
];

export default function App() {
  const [contacts, setContacts] = useState(SEED);
  const [query, setQuery] = useState("");

  const addContact = (contact) => setContacts((cs) => [contact, ...cs]);
  const removeContact = (id) =>
    setContacts((cs) => cs.filter((c) => c.id !== id));

  const q = query.trim().toLowerCase();
  const filtered = q
    ? contacts.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          (c.company || "").toLowerCase().includes(q)
      )
    : contacts;

  return (
    <div className="cc-app">
      <header className="cc-header">
        <div className="cc-header-inner">
          <span className="cc-eyebrow">Contact Directory</span>
          <h1>The Drawer</h1>
          <p className="cc-sub">
            {contacts.length} card{contacts.length !== 1 ? "s" : ""} filed
          </p>
        </div>
      </header>

      <main className="cc-main">
        <ContactForm onAdd={addContact} />

        <div className="cc-search-row">
          <label className="cc-search">
            <span className="cc-search-icon" aria-hidden="true">
              ⌕
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or company…"
              aria-label="Search contacts by name or company"
            />
            {query && (
              <button
                className="cc-clear"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </label>
          <span className="cc-count">
            {filtered.length} of {contacts.length}
          </span>
        </div>

        <ContactList contacts={filtered} onRemove={removeContact} />
      </main>
    </div>
  );
}
