// What if I ask you that the input string should start with devadnani26 ? How would the code change?


const crypto = require("crypto");

function findHash(prefix, baseStr) {
  let input = 0;
  const prefixLength = prefix.length;  // Calculate once
  let hash;
  while (true) {
    const inputStr = `${baseStr}${input}`;  // Use template literals for string concatenation
    hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.slice(0, prefixLength) === prefix) {  // Use slice for efficient comparison
      return { inputStr, hash };
    }
    input++;
  }
}

const res = findHash("00000", "devadnani26");
console.log(`Input: ${res.inputStr}`);
console.log(`Hash: ${res.hash}`);
