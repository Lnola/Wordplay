import React, { useState } from "react";
import Input from "./components/Input";
import Words from "./components/Words";
import { filterTextByInput } from "./utils/filterTextByInput";
import "./styles.css";

const App = () => {
  const [input, setInput] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [textLengthInput, setTextLengthInput] = useState("");
  const [text, setText] = useState([]);

  const submit = e => {
    e.preventDefault();

    if (input.length > 2) {
      setText(filterTextByInput({ input, filterInput, textLengthInput }));
      setInput("");
      setFilterInput("");
      setTextLengthInput("");
    }
  };

  return (
    <>
      <Input
        input={input}
        setInput={setInput}
        filterInput={filterInput}
        setFilterInput={setFilterInput}
        textLengthInput={textLengthInput}
        setTextLengthInput={setTextLengthInput}
        submit={submit}
      />
      <Words words={text} />
    </>
  );
};

export default App;
