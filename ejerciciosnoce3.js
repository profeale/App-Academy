function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    const result = [];
    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
};

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    const result = [];
    for (let i = arr.length - 1; i >= 0; i -= 2) {
        result.push(arr[i]);
    }
    return result;
};

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    const result = [];
    for (let i = 1; i < arr.length; i *= 2) {
        result.push(arr[i]);
    }
    return result;
};

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    const result = [];
    for (let i = n; i < arr.length; i *= n) {
        result.push(arr[i]);
    }
    return result;
};

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    const mid = Math.ceil(arr.length / 2);
    return arr.slice(0, mid);
};

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    const mid = Math.ceil(arr.length / 2);
    return arr.slice(mid);
};

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}