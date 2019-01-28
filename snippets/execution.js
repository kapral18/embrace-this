var a = ‘a’;
function foo() {
    var b = ‘b’;
    function bar() {
        var c = ‘c’;
        console.log(c); // You can access me here.   
        console.log(b); // You can access me too..
        console.log(a); // You can also access me..
    }
    bar();
}
foo();