function findOdd(arr) {
    const counts = {};
  
    arr.forEach(num => {
      counts[num] = (counts[num] || 0) + 1;
    });

    for (const num in counts) {
      if (counts[num] % 2 !== 0) {
        return parseInt(num, 10);
      }
    }
  }
  
  module.exports = findOdd;