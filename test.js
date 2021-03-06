var tape = require('tape')
var reg = require('./index.js')

var x = [1,2,3,4,5]
var y = [2,4,5,4,5]
var z = [8,2,3,5,6,8]

tape('hatPlug', function (t) {
  t.ok(reg.hatPlug(x,y))
  t.end()
})

tape('yPlug', function (t) {
  t.ok(reg.yPlug(y))
  t.end()
})

tape('rSquared', function (t) {
  reg.rSquared(x, y, function (err, rSquared) {
    t.ok(rSquared === 0.6)
  })
  t.end()
})

tape('Unequal array length error', function (t) {
  t.throws(reg.rSquared.bind(null, x, z))
  t.end()
})
