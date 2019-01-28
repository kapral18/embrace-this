var x = 10;

function foo() {
    var y = 20; // free variable
    function bar() {
        var z = 15; // free variable
        return x + y + z;
    }
    return bar;
}

var test = foo();

test(); // 45

GlobalEnvironment = {
    EnvironmentRecord: {
        // built-in identifiers
        Array: '<func>',
        Object: '<func>',
        // etc..

        // custom identifiers
        x: 10
    },
    outer: null
};

fooEnvironment = {
    EnvironmentRecord: {
        y: 20,
        bar: '<func>'
    }
  outer: GlobalEnvironment
};

barEnvironment = {
    EnvironmentRecord: {
        z: 15
    }
  outer: fooEnvironment
};