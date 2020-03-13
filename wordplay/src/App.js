import React, { useState, useRef } from "react";
import Input from "./components/Input";
import Words from "./components/Words";
import { filterTextByInput } from "./utils/filterTextByInput";
import "./styles.css";
import Language from "./components/Language";

const App = () => {
  const [input, setInput] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [textLengthInput, setTextLengthInput] = useState("");
  const [language, setLanguage] = useState("eng");
  const [text, setText] = useState([]);
  const textRef = useRef();

  const submit = e => {
    e.preventDefault();

    if (input.length > 2) {
      setText(
        filterTextByInput({ input, filterInput, textLengthInput, language })
      );
      setInput("");
      setFilterInput("");
      setTextLengthInput("");

      textRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <main>
      <Language language={language} setLanguage={setLanguage} />
      <h1>WordPlay</h1>
      <Input
        input={input}
        setInput={setInput}
        filterInput={filterInput}
        setFilterInput={setFilterInput}
        textLengthInput={textLengthInput}
        setTextLengthInput={setTextLengthInput}
        submit={submit}
      />

      <div className="words-wrapper" ref={textRef}>
        <Words words={text} />
      </div>
    </main>
  );
};

export default App;
