(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('foo', factory) :
  (global.foo = factory());
}(this, function () { 'use strict';

  function mod(){
    console.log("mod")
  }

  function foo(){
    console.log("foo")
    console.log(mod())
  }

  return foo;

}));