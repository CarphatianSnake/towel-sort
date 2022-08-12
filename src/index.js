module.exports = function towelSort (matrix) {

  if (matrix === undefined) return [];

  let res = [];

  const resPush = arr => arr.forEach(value => res.push(value));

  matrix.forEach((item, i) => {
    if (i % 2 === 0) {
      resPush(item);
    } else {
      resPush(item.reverse());
    }
  });

  return res;
}
