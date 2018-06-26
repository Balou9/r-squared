var lirm = require('lirm')

function sum (arr) {
  var result = []
  for (var i = 0; i < arr.length; i++){
    result += arr[i]
  }
  return result
}

function mean (arr) {
  return sum(arr) / arr.length
}

function meanDist (arr) {
  return arr.map( function (i) {
    return i - mean(arr)
  })
}

function distSquared (arr) {
  return arr.map( function (each)  {
   return Math.pow(each, 2)
  })
}

function yHatPlug (x, y) {
  var result = []
  for (var i = 0; i < x.length; i++) {
    result.push(lirm.lirm(x, y, i) - mean(y))
  }
  return result
}

function meanSquaredDistance (arr) {
  var out = sum(distSquared(arr))
  return out
}

function rSquared (x, y) {
  return {
    'estimatedMeanSquaredDistance': typeof yHatPlug(x,y)[0],
    'actualMeanSquaredDistance': typeof meanDist(y)[0]
  }
}

module.exports = {
  rSquared,
  meanSquaredDistance,
  yHatPlug,
  distSquared,
  meanDist,
  mean,
  sum
}
