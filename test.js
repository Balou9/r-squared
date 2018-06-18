var tape = require('tape')
var rSquared = require('./index.js')

var x = [1,2,3,4,5]
var y = [2,4,5,4,5]


tape('XPlug is ', function (t) {
  t.ok(rSquared.xPlug(x, y), 'is true')
  t.end()
})

tape('distSquared is ', function (t) {
  t.ok(rSquared.distSquared(y), 'is true')
  t.end()
})

tape('r-squared is ', function (t) {
  t.ok(rSquared.rSquared(x,y), 'is true')
  t.end()
})
