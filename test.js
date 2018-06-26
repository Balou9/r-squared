var tape = require('tape')
var reg = require('./index.js')

var x = [1,2,3,4,5]
var y = [2,4,5,4,5]
var z = [8,2,3,5,6,8]
var nn = '419'

tape('rSquared', function (t) {
  t.ok(reg.rSquared(x,y))
  t.ok(typeof reg.rSquared(x,y) === 'number')
  t.end()
})


// tape('XPlug is ', function (t) {
//   t.ok(rSquared.yHatPlug(x, y), 'is true')
//   t.end()
// })
//
// tape('distSquared is ', function (t) {
//   t.ok(rSquared.distSquared(y), 'is true')
//   t.end()
// })
//
// tape('r-squared is ', function (t) {
//   t.ok(rSquared.rSquared(x,y), 'is true')
//   t.end()
// })
//
