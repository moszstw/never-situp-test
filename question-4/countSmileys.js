function countSmileys(faces) {
    const validSmileyRegex = /^[:;][-~]?[)D]$/;
    let count = 0;
  
    faces.forEach(face => {
      if (validSmileyRegex.test(face)) {
        count++;
      }
    });
  
    return count;
  }
  
  module.exports = countSmileys;