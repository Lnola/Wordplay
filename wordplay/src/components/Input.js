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
    if (filterInput.length < 1) inputRef.current.focus();
  });

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          ref={inputRef}
          value={input}
          placeholder="Type in the letters..."
          onChange={e => setInput(e.target.value)}
        />
      </form>

      {input.length > 2 && (
        <form onSubmit={submit}>
          <input
            type="text"
            value={filterInput}
            placeholder="Filter - NUMBER/LETTER"
            onChange={e => setFilterInput(e.target.value)}
          />
        </form>
      )}

      {input.length > 2 && (
        <form onSubmit={submit}>
          <input
            type="text"
            value={textLengthInput}
            placeholder="Text length"
            onChange={e => setTextLengthInput(e.target.value)}
          />
        </form>
      )}
    </>
  );
};

export default Input;
