
exports.min = function min (array) {
  array.sort((a,b)=>a-b);
  return array[0];
};

exports.max = function max (array) {
  array.sort((a,b)=>b-a);
  return array[0];
};

exports.avg = function avg (array) {
  const average = array.reduce((a, b) => a + b) / array.length;
  return average;
};
