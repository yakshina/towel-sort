
// You should implement your task here.

module.exports = function towelSort(matrix) {

  let m = [];
  if (matrix == undefined) {
    return m;
  }
  else {
    for (let i = 0; i < matrix.length; i++) {
      if ((i + 1) % 2 == 0) {
        matrix[i] = matrix[i].reverse();
      }
    }

    m = matrix.flat();
    return m;
  }


}
