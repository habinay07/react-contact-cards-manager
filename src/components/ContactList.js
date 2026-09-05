import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList({ contacts, onRemove }) {
  if (contacts.length === 0) {
    return (
      <div className="cc-empty">
        <div className="cc-empty-card" aria-hidden="true" />
        <p>No cards match. File a new one, or clear the search.</p>
      </div>
    );
  }
  return (
    <div className="cc-grid">
      {contacts.map((c) => (
        <ContactCard key={c.id} contact={c} onRemove={onRemove} />
      ))}
    </div>
  );
}
