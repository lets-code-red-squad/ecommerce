export function Input({ label, type, id, tag, func }) {
  return (
    <div className="input-cards">
      <label htmlFor={id} className="flex cards">
        {label}

        {tag === "textarea" ?
          (
            <textarea
              type={type}
              id={id}
              onChange={({ target }) => func(target.value)}
            />
          ) :
          (
            <input
              type={type}
              id={id}
              onChange={({ target }) => func(target.value)}
            />
          )}
      </label>
    </div>
  );
}
