import React from "react";

function initials(name) {
  if (!name) return "?";
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

// A small deterministic hue derived from the name, so avatars feel
// assigned rather than random/flickering between renders.
function hueFromName(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
  return h;
}

export default function ContactCard({ contact, onRemove }) {
  const hue = hueFromName(contact.name);
  return (
    <article className="cc-card">
      <div className="cc-punch" aria-hidden="true" />
      <button
        className="cc-remove"
        onClick={() => onRemove(contact.id)}
        aria-label={`Remove ${contact.name}`}
        title="Remove card"
      >
        ×
      </button>

      <div className="cc-card-top">
        {contact.avatar ? (
          <img className="cc-avatar" src={contact.avatar} alt={contact.name} />
        ) : (
          <div
            className="cc-avatar cc-avatar-fallback"
            style={{
              background: `hsl(${hue} 45% 88%)`,
              color: `hsl(${hue} 40% 30%)`,
            }}
          >
            {initials(contact.name)}
          </div>
        )}
        <div className="cc-name-block">
          <h3>{contact.name}</h3>
          {(contact.title || contact.company) && (
            <p className="cc-role">
              {contact.title}
              {contact.title && contact.company ? " · " : ""}
              {contact.company}
            </p>
          )}
        </div>
      </div>

      <div className="cc-divider" />

      <dl className="cc-meta">
        {contact.phone && (
          <div className="cc-meta-row">
            <dt>tel</dt>
            <dd>{contact.phone}</dd>
          </div>
        )}
        {contact.email && (
          <div className="cc-meta-row">
            <dt>mail</dt>
            <dd className="cc-email">{contact.email}</dd>
          </div>
        )}
      </dl>

      {contact.bio && <p className="cc-bio">{contact.bio}</p>}
    </article>
  );
}
