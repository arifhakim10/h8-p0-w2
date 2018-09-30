function konversiMenit(menit) {
  var i = Math.floor(menit / 60)
  var j = menit / 60 - Math.floor(menit / 60)
  var k = Math.round(j * 60)
    if(k < 10) {
      k = '0' + k
    }
  return i+ ':' +k
}

console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120)); 