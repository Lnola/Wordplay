import EnglishText from "../constants/English";
import CroatianText from "../constants/Croatian";

export const filterTextByInput = ({
  input,
  filterInput,
  textLengthInput,
  language
}) => {
  let text = EnglishText;
  if (language === "Croatian") text = CroatianText;

  input = input.toLowerCase();
  filterInput = filterInput.toLowerCase();
  textLengthInput = textLengthInput.toLowerCase();

  const lettersNotInInput = getLettersNotInInput(input);

  let filteredText = text.filter(word => {
    let numberOfInputsInWord = 0;
    let doesContainOtherThanInput = true;
    let isNumberOfLettersCorrect = true;

    lettersNotInInput.forEach(letter => {
      if (word.includes(letter)) doesContainOtherThanInput = false;
    });

    if (doesContainOtherThanInput)
      input.split("").forEach(letter => {
        if (word.includes(letter)) numberOfInputsInWord++;

        isNumberOfLettersCorrect = checkIsNumberOfLettersCorrect(
          word,
          letter,
          input,
          isNumberOfLettersCorrect
        );
      });

    return (
      isNumberOfLettersCorrect &&
      numberOfInputsInWord >= 3 &&
      word.length <= input.length &&
      getFilter(filterInput, word) &&
      getTextLengthInput(textLengthInput, word)
    );
  });

  filteredText = sortText(filteredText);
  if (filteredText.length === 0) filteredText = ["No Such Words"];

  return filteredText;
};

//helper functions

const getFilter = (filterInput, word) => {
  filterInput = filterInput.split(" ");

  if (filterInput[0] === "") return true;

  let isFilterAppliedArray = [];

  filterInput.forEach(filterFragment => {
    if (filterFragment.includes("/", 1)) {
      const filter = filterFragment.split("/");

      isFilterAppliedArray.push(word[parseInt(filter[0]) - 1] === filter[1]);
    }
  });

  if (isFilterAppliedArray.includes(false)) return false;

  return true;
};

const getTextLengthInput = (textLengthInput, word) => {
  if (textLengthInput.length === 0) return true;

  return parseInt(textLengthInput) === word.length;
};

const getLettersNotInInput = input => {
  let lettersNotInInput = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

  lettersNotInInput = lettersNotInInput.split(" ");

  input.split("").forEach(letter => {
    lettersNotInInput.splice(lettersNotInInput.indexOf(letter), 1);
  });

  return lettersNotInInput;
};

const checkIsNumberOfLettersCorrect = (
  word,
  letter,
  input,
  isNumberOfLettersCorrect
) => {
  const letterRepeatsInWord = word.split(letter).length - 1;
  const letterRepeatsInInput = input.split(letter).length - 1;

  if (letterRepeatsInWord > letterRepeatsInInput)
    isNumberOfLettersCorrect = false;

  return isNumberOfLettersCorrect;
};

const sortText = filteredText => {
  filteredText.sort((a, b) => {
    return a.length - b.length;
  });

  return filteredText;
};
