//1. Let's form a sentence

var word = ' JavaScript ';
var second = ' is ';
var third = ' awesome ';
var fourth = ' and ';
var fifth = ' I ';
var sixth = ' love ';
var seventh = ' it! ';
console.log(word+second+third+fourth+fifth+sixth+seventh);


//2. Index Acessing -1 by 1

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13] + word[14];
var thirdWord = word[15] + word[16] + word[17];
var fourthWord = word[18] + word[19] + word[20];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);


//3. Breaking sentence (again) using substring

var word2 = 'wow JavaScript is so cool';
var exampleFirstWord2 = word2.substring(0, 3);
var secondWord2 = word2.substring(4, 14);
var thirdWord2 = word2.substring(15, 18);
var fourthWord2 = word2.substring(18, 20);
var fifthWord2 = word2.substring(21, 25);

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);


//.4 Breaking Sentence (yet again) and count each length

var word4 = 'wow JavaScript is so cool';

var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4= word4.substring(4, 14);
var thirdWord4= word4.substring(15, 18);
var fourthWord4= word4.substring(18, 20);
var fifthWord4= word4.substring(21, 25);

console.log('First Word: '+exampleFirstWord4+', with length:'+(exampleFirstWord4.length));
console.log('Second Word: '+secondWord4+', with length: '+(secondWord4.length));
console.log('Third Word: '+thirdWord4+', with length: '+(thirdWord4.length));
console.log('Fourth Word: '+fourthWord4+', with length: '+(fourthWord4.length));
console.log('Fifth Word: '+fifthWord4+', with length: '+(fifthWord4.length));