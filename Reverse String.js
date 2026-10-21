// 344. Reverse String
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  console.log(s)
  let writeIndex = 0
  let i = s.length - 1
  let lastElememt = ""
  while (i > writeIndex) {
    lastElememt = s[writeIndex]
    s[writeIndex] = s[i]
    s[i] = lastElememt
    writeIndex++
    i--
  }
  console.log(s)
};

console.log(reverseString(["h","e","l","o"]))