1//

console.log('LOOPING PERTAMA')
var i = 2
while(i < 21) {
  console.log(i + ' - I love conding')
  i += 2;
}
console.log('LOOPING KEDUA')
while(i > 1) {
  i -= 2;
  console.log(i + ' - I will become fullstack developer')
}

2//

console.log('LOOPING PERTAMA')
for(var i = 1; i < 21; i++) {
  console.log(i + ' - I love coding')
}
console.log('LOOPING KEDUA')
for(var i = 20; i > 0; i--) {
  console.log(i + ' - I will become fullstack developer')
}

3//

for(var i = 1; i < 101; i++) {
    if(i % 2===0)
      console.log('GENAP');
    else
      console.log('GANJIL');
  }

// KELIPATAN 3

for(var i = 1; i < 100; i += 2) {
    if(i % 3===0) {
      console.log(i + ' KELIPATAN 3')
    }
  }

// KELIPATAN 6

for(var i = 1; i < 100; i +=5) {
    if(i % 6===0) {
      console.log(i + ' KELIPATAN 6')
    }
}

// KELIPATAN 9

for(var i = 1; i < 100; i +=9) {
    if(i % 10===0) {
      console.log(i + ' KELIPATAN 10')
    }
}
