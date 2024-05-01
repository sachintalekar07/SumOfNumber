const sumOfNumbers = arr => {

  if (!Array.isArray(arr)) {
    throw new Error('Input should be an array.')
  }

  if (arr.length === 0) throw new Error('Array can\'t be empty.')

  const n = arr.length || 0

  if (n === 0) return 0

  return n === 0 ? 0 : ((n * (n + 1)) / 2)
}

module.exports = sumOfNumbers;
