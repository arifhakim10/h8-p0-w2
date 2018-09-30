//1

var rows1 = 5
while (rows1 > 0 ) {
  console.log ('*')
  rows1--
}

//2
var i = 5;

for(var column = 0; column < i; column++) {
  var result='';
   for(var rows = 0; rows < i; rows++) {
    result += '*';
  } console.log(result)
} 
console. log('')

//3

var i = 5;

for(var column = 0; column < i; column++) {
  var result='';
   for(var rows = 0; rows <= column; rows++) {
    result += '*';
  } console.log(result)
} 
