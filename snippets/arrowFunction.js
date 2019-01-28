var obj = {
  method() {
    var lexical = () => {
      console.log(this);
    };

    // even though baseValue is environment record,
    // will use prev context's environment [[thisValue]] which is obj{...}
    lexical();
  }
};

obj.method();
