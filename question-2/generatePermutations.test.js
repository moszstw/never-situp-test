const generatePermutations = require('./generatePermutations');

describe('generatePermutations', () => {
  it('should generate all permutations and remove duplicates', () => {
    expect(generatePermutations('a')).toEqual(['a']);
    expect(generatePermutations('ab')).toEqual(['ab', 'ba']);
    expect(generatePermutations('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
    expect(generatePermutations('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
  });
});
