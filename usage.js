var rSquared = require('./index.js')

var x = [1,2,3,4,5]
var y = [2,4,5,4,5]

rSquared.rSquared(x, y, function (err, data) {
  if (err) throw err
  console.log(data)
})
