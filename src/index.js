module.exports = function towelSort (matrix) {

  if (matrix === undefined) return [];

  let res = [];

  matrix.forEach((item, i) => {
    if (i % 2 === 0) {
      item.forEach (value => {
        res.push(value);
      })
    } else {
      item.reverse().forEach (value => {
        res.push(value);
      })
    }
  });

  return res;
}
