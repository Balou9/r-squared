var lirm = require('lirm')

function mean (arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

function yPlug (arr) {
  return arr.reduce((acc,cur) => acc + Math.pow((cur - mean(arr)), 2), 0)
}

function hatPlug (x, y) {
  var result = []
  for (var i = 1; i < (x.length + 1); i++){
    result.push(lirm.lirm(x,y,i))
  }
  return result
}

function rSquared () {
  return sumOfActualMeans / sumOfPredictedMeans
}

module.exports = {
  rSquared,
  hatPlug,
  yPlug
}
