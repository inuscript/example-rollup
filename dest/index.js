(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.myFoo = factory());
}(this, function () { 'use strict';

  function mod(){
    console.log("mod")
  }

  function foo(){
    console.log("foo")
    console.log(mod())
  }

  function baz(){
    console.log("baz")
    mod()
  }

  var index = { 
    foo: foo, baz: baz
  }

  return index;

}));