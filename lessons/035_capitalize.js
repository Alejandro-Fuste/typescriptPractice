var pageTitle1 = "some amazing title";
var pageTitle2 = "Another Amazing Title";
var pageTitle3 = "A rEAlY weIrd TiTLE";
var pageTitle4 = "";
var capitalizeWord = function (str) {
    var firstCharacter = str.charAt(0).toLocaleUpperCase();
    var restOfCharacters = str.substring(1).toLocaleLowerCase();
    return "".concat(firstCharacter).concat(restOfCharacters);
};
var capitalizeEachWord = function (str) {
    return str
        .split(" ")
        .map(function (word) { return capitalizeWord(word); })
        .join(" ");
};
console.log(capitalizeEachWord(pageTitle1));
console.log(capitalizeEachWord(pageTitle2));
console.log(capitalizeEachWord(pageTitle3));
console.log(capitalizeEachWord(pageTitle4));
//# sourceMappingURL=035_capitalize.js.map