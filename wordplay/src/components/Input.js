import React, { useRef, useEffect } from "react";

const Input = ({
  input,
  setInput,
  filterInput,
  setFilterInput,
  textLengthInput,
  setTextLengthInput,
  submit
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (filterInput.length < 1 && textLengthInput.length < 1)
      inputRef.current.focus();
  });

  return (
    <section>
      <form onSubmit={submit}>
        <input
          type="text"
          ref={inputRef}
          value={input}
          placeholder="Type in the letters..."
          onChange={e => setInput(e.target.value)}
        />
      </form>

      <form onSubmit={submit}>
        <input
          type="text"
          value={filterInput}
          placeholder="Filter - number/letter..."
          onChange={e => setFilterInput(e.target.value)}
        />
      </form>

      <form onSubmit={submit}>
        <input
          type="text"
          value={textLengthInput}
          placeholder="Filter - word lenght..."
          onChange={e => setTextLengthInput(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Input;
