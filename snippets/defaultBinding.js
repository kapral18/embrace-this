function foo() {
  console.log(this.a);
}

var a = 2;

foo(); // 2 in sloppy mode, typeError in strictMode, i.e. undefined.a
