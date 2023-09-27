function FromInput({ label, type, name, state, setState, required = true }) {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        className={`input input-bordered input-sm sm:input-md w-full`}
        value={state}
        onChange={(e) => setState(e.target.value)}
        required={required}
      />
    </div>
  );
}

export default FromInput;
