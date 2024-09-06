// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?


const crypto = require("-+
  3crypto");

function findHash(prefix) {
  let input = 0;
  const prefixLength = prefix.length;
  while (true) {
    const hash = crypto.createHash("sha256").update(input.toString()).digest("hex");
    if (hash.slice(0, prefixLength) === prefix) {
      return { input, hash };
    }
    input++;
  }
}

const res = findHash("00000");
console.log(`Input: ${res.input}`);
console.log(`Hash: ${res.hash}`);
