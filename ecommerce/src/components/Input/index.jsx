export function Input({ name, label, type, id, tag, func }) {
  return (
    <div className="input-cards">
      <label htmlFor={id} className="flex cards">
        {label}

        {tag === "textarea" ? (
          <textarea
            name={name}
            type={type}
            id={id}
            onChange={(event) => func(event.target.value)}
          />
        ) : (
          <input
            name={name}
            type={type}
            id={id}
            onChange={(event) => func(event.target.value)}
          />
        )}
      </label>
    </div>
  );
}
