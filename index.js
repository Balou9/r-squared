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
  
}

function rSquared (arr) {

}


module.exports = rSquared
