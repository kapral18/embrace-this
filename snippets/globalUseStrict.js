// global scope
"use strict"; // blocks conversion of undefined to window

console.log(this); // always window

var foo = function() {
  console.log(this); // undefined

  function bar() {
    console.log(this); // undefined
  }

  function baz() {
    console.log(this); // undefined
  }

  bar();
  baz();
};

foo();
