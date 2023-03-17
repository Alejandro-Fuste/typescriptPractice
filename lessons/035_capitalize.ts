const pageTitle1 = "some amazing title";
const pageTitle2 = "Another Amazing Title";
const pageTitle3 = "A rEAlY weIrd TiTLE";
const pageTitle4 = "";

const capitalizeWord = (str: string) => {
  const firstCharacter = str.charAt(0).toLocaleUpperCase();
  const restOfCharacters = str.substring(1).toLocaleLowerCase();

  return `${firstCharacter}${restOfCharacters}`;
};

const capitalizeEachWord = (str: string) =>
  str
    .split(" ")
    .map((word: string) => capitalizeWord(word))
    .join(" ");

console.log(capitalizeEachWord(pageTitle1));
console.log(capitalizeEachWord(pageTitle2));
console.log(capitalizeEachWord(pageTitle3));
console.log(capitalizeEachWord(pageTitle4));
