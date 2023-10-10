
function generatePermutations(str) {
    const result = [];
  
    function permute(current, remaining) {
      if (remaining.length === 0) {
        result.push(current);
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {
        const nextChar = remaining[i];
        const rest = remaining.slice(0, i) + remaining.slice(i + 1);
        permute(current + nextChar, rest);
      }
    }
  
    permute('', str);
  
    return [...new Set(result)];
  }
  
  module.exports = generatePermutations;
  