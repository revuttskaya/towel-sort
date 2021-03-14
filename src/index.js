module.exports = function towelSort(matrix) {
    let result = [];

    if (matrix === undefined) {
        return result;
    }

    for (let i = 0; i < matrix.length; i++) {
        result = result.concat(i % 2 === 0 ? matrix[i] : matrix[i].reverse());
    }

    return result;
};
