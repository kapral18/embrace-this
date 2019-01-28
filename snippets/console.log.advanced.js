// GLOBAL SPACE

var obj = {
  x: 1,
  method() {
    console.log(this.x);
  }
};

console.log(obj.method());
