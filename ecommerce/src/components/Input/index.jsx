export function Input({ name, label, type, id, tag, func, value }) {
  return (
    <div className="input-cards">
      <label htmlFor={id} className="flex cards">
        {label}

        {tag === "textarea" ? (
          <textarea
            name={name}
            type={type}
            id={id}
            onChange={(event) => console.log(event.target)}
          />
        ) : (
          <input
            name={name}
            type={type}
            id={id}
            onChange={(event) => console.log(event.target.value)}
          />
        )}
      </label>
    </div>
  );
}
