import React, { useState } from "react";
import Eng from "../assets/eng.png";
import Cro from "../assets/cro.jpg";

const Language = ({ setLanguage }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const languages = [
    { language: "English", image: Eng },
    { language: "Croatian", image: Cro }
  ];

  const setDisplayed = () => {
    setIsDisplayed(true);
    setTimeout(() => {
      setIsDisplayed(false);
    }, 5000);
  };

  const handleSetLanguage = ({ language }) => {
    setLanguage(language);
    setIsDisplayed(false);
  };

  return (
    <>
      {isDisplayed ? (
        <article>
          {languages.map((language, index) => (
            <figure key={index} onClick={() => handleSetLanguage(language)}>
              <img src={language.image} />
              <figcaption>{language.language}</figcaption>
            </figure>
          ))}
        </article>
      ) : (
        <p className="language" onClick={setDisplayed}>
          Change language
        </p>
      )}
    </>
  );
};

export default Language;
