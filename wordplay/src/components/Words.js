import React from "react";

const Words = ({ words }) => {
  return (
    <>
      {words.length > 0 && (
        <ol>
          {words.map((word, index) => (
            <li key={index}>
              {index + 1}. {word}
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default Words;
