var tape = require('tape')
var reg = require('./index.js')

var x = [1,2,3,4,5]
var y = [2,4,5,4,5]
var z = [8,2,3,5,6,8]
var nn = '419'

tape('hatPlug', function (t) {
  t.ok(reg.hatPlug(x,y))
  t.end()
})

tape('yPlug', function (t) {
  t.ok(reg.yPlug(y))
  t.end()
})
