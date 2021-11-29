function reverseString(word){
  let reversedWord = word.split("").reverse().join("");
  return reversedWord;  
  return word;
}

function isPalindrome(word) {
  // Write your algorithm here
  /*
  Make a isPalindrome function that returns either true or false.
  When the input string is the same forward and backwards, return true.
  Otherwise, return false. 
  */

  const reversedWord = reverseString(word);
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  reverse the input string
  If reversed string is same as input
    return true
  Else
    return false*/

/*
  Add written explanation of your solution here
  This is, currently, the most optimized solution for this lab
  Has fewer lines, smaller size, and fewer conditions, than the original solution.*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("a"));
  console.log("=>", isPalindrome("level"));
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("ab"));
  console.log("=>", isPalindrome("stanley"));
  console.log("=>", isPalindrome("yelnats"));
}

module.exports = isPalindrome;