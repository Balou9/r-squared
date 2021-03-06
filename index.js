var lirm = require('lirm')

function mean (arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

function yPlug (arr) {
  return arr.reduce((acc,cur) => acc + Math.pow((cur - mean(arr)), 2), 0)
}

function hatPlug (x, y) {
  var result = []
  for (var i = 1; i < x.length + 1; i++){
    result.push(Math.pow(lirm.lirm(x,y,i) - mean(y), 2))
  }
  return Math.round(result.reduce((acc,cur) => acc + cur, 0) * 10) / 10
}

function rSquared (x, y, callback) {
  if (x.length !== y.length) throw new TypeError('Unequal array length.')
  callback(null, hatPlug(x, y) / yPlug(y))
}

module.exports = {
  rSquared,
  hatPlug,
  yPlug
}
