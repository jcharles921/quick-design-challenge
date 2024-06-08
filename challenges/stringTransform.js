// Ok, this one is less terrifying than the last one.
// I am given a string and need to perform specific operations on it.
// The key to solving the problem is knowing which JavaScript functions to use for string manipulation.
// A good Google search and it's done.

const transformString = (inputString) => {
  const length = inputString.length;

  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  function toAsciiCodes(str) {
    return str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  if (length % 15 === 0) {
    // If length is divisible by 15, perform both operations
    const reversedString = reverseString(inputString);
    return toAsciiCodes(reversedString);
  } else if (length % 3 === 0) {
    // If length is divisible by 3, reverse the entire string
    return reverseString(inputString);
  } else if (length % 5 === 0) {
    // If length is divisible by 5, replace each character with its ASCII code
    return toAsciiCodes(inputString);
  } else {
    // If length is not divisible by 3, 5, or 15, return the original string
    return inputString;
  }
};

// Example usage
console.log(transformString("Hamburger")); // Expecting: "regrubmaH"
console.log(transformString("Pizza")); // Expecting: "80 105 122 122 97"
console.log(transformString("Happy Birthday!")); // Expecting: "33 121 97 100 104 116 114 105 66 32 121 112 112 97 72"
