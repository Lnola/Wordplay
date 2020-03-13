import React from "react";

const Words = ({ words }) => {
  return (
    <>
      {words.length > 0 && (
        <ol>
          {words.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ol>
      )}
    </>
  );
};

export default Words;
