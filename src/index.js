module.exports = function reverse(num) {
  if (typeof num !== 'number') {
    throw new Error('Not implemented');
  }
  return Number(String(Math.abs(num)).split('').reverse().join(''));
};
