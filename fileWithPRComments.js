
function newFunction() {
   if (true) {
       console.log('This should trigger a linter error.');
   }
}
let x = 5;
x++;
var unusedVar = 123;
for (var i = 0; i < 5; i++) {
   console.log(i);
}