// 14. Longest Common Prefix
// Easy
// Topics
// premium lock icon
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  const firstString = strs[0];
  for (let i = 0; i < firstString.length; i++) {
    const boolean = strs.every((str) => str[i] === firstString[i]);
    if (boolean) {
      commonPrefix += firstString[i];
    } else {
      return commonPrefix;
    }
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
