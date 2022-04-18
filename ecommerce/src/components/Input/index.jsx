import './style.css';

export function Input({ name, label, type, id, tag, func, value, className }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="flex cards">
        {label}

        {tag === "textarea" ?
          (
            <textarea
              name={name}
              value={value}
              type={type}
              id={id}
              onChange={({ target }) => func(target.value)}
            />
          ) :
          (type === 'file' ?
            <input
              name={name}
              type={type}
              id={id}
              onChange={({ target }) => func(target.files[0])}
            /> :
            <input
              name={name}
              value={value}
              type={type}
              id={id}
              onChange={({ target }) => func(target.value)}
            />
          )}
      </label>
    </div>
  );
}
