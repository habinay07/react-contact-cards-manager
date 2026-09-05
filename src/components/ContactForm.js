import React, { useState } from "react";

export default function ContactForm({ onAdd }) {
  const empty = {
    name: "",
    title: "",
    company: "",
    phone: "",
    email: "",
    bio: "",
    avatar: "",
  };
  const [draft, setDraft] = useState(empty);
  const [error, setError] = useState("");

  const update = (field) => (e) =>
    setDraft((d) => ({ ...d, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!draft.name.trim()) {
      setError("A name is required to file this card.");
      return;
    }
    onAdd({ ...draft, id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}` });
    setDraft(empty);
    setError("");
  };

  return (
    <form className="cc-form" onSubmit={handleSubmit}>
      <div className="cc-form-head">
        <span className="cc-eyebrow">New entry</span>
        <h2>File a contact</h2>
      </div>

      <div className="cc-field-row">
        <label className="cc-field">
          <span>Full name*</span>
          <input
            type="text"
            value={draft.name}
            onChange={update("name")}
            placeholder="Ada Lovelace"
          />
        </label>
        <label className="cc-field">
          <span>Job title</span>
          <input
            type="text"
            value={draft.title}
            onChange={update("title")}
            placeholder="Analytical Engineer"
          />
        </label>
      </div>

      <div className="cc-field-row">
        <label className="cc-field">
          <span>Company</span>
          <input
            type="text"
            value={draft.company}
            onChange={update("company")}
            placeholder="Analytical Engines Co."
          />
        </label>
        <label className="cc-field">
          <span>Phone</span>
          <input
            type="tel"
            value={draft.phone}
            onChange={update("phone")}
            placeholder="(555) 010-2027"
          />
        </label>
      </div>

      <div className="cc-field-row">
        <label className="cc-field">
          <span>Email</span>
          <input
            type="email"
            value={draft.email}
            onChange={update("email")}
            placeholder="ada@example.com"
          />
        </label>
        <label className="cc-field">
          <span>Avatar URL</span>
          <input
            type="text"
            value={draft.avatar}
            onChange={update("avatar")}
            placeholder="optional — leave blank for initials"
          />
        </label>
      </div>

      <label className="cc-field cc-field-wide">
        <span>Short bio</span>
        <textarea
          rows={2}
          value={draft.bio}
          onChange={update("bio")}
          placeholder="What they do, in one line."
        />
      </label>

      {error && <p className="cc-error">{error}</p>}

      <button type="submit" className="cc-submit">
        Add to drawer
      </button>
    </form>
  );
}
