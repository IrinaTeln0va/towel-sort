module.exports = function towelSort(matrix = []) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    const subArray = matrix[i];
    if (i % 2 != 0) {
      subArray.sort((a,b) => b - a);
    }

    result = [...result, ...subArray];
  }

  return result;
}
