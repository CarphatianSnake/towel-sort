module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  return matrix.map((item, i) => i % 2 === 0 ? item : item.reverse()).flat();
}