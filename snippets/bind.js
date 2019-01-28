var obj = {
  method() {
    var lexical = function() {
      console.log(this);
    }.bind(this);

    // even though baseValue is environment record,
    // will use explicitly set [[BoundThis]] which is obj{...}
    lexical();

    lexical.bind({ a: 1 })(); // still points to obj{...}
    lexical.call({ b: 1 }); // still the same
  }
};

obj.method();
