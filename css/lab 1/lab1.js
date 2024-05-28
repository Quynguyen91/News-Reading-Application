"use strict"

const country = 'U.S';
const continent = 'North America';
// let population = 333.29;

// 2.5.2
// let population = 13;
let population = 130;

console.log('lab 2.1=============================');

console.log('contry ', country, 'continent ', continent, " population", population);

// lab 2.1
let isIsland = true;
let language;

console.log('value for isIsland: ', isIsland);
console.log('value for population: ', population);
console.log('value for country: ', country);
console.log('value for language: ', language);

// lab 2.2
// 2.2.1
language = 'English';
// population = 2.2;
console.log('lab 2.2=============================');
console.log('value for population: ', population);
// 2.2.3
// không thể thay đổi giá trị của các biến đã được khai báo với const


// lab 2.3
console.log('lab 2.3 ===============================');
// 1. số người sống ở mỗi miền
console.log('1==============');
let half_population = population / 2;
console.log('giá trị của nửa dân số là: ', half_population);

//2 tang population lên 1 và in ra console
console.log('2==============');
population += 1;
console.log('gia tri cua population sau khi + 1: ', population);

// 3. so sánh với dân số phần lan
console.log('3==============');
(population > 6) ? console.log('nhiều hơn dân số Phần Lan') : console.log('it hơn dân số Phần Lan');

//4. so sánh với mức dân trung bình 33 trieu người
console.log('4==============');
(population >= 33) ? console.log('cao hơn hoặc bằng mức dân trung bình')
: console.log('thấp hơn mức dân trung bình');

// 5. tạo biến mới 'description'
console.log('5==============');
let description = country + ' and its ' + population + 
' million people speak ' + language;
console.log(description);


// lab 2.4
console.log('lab 2.4=============================');
description = `${country} and its ${population} 
million people speak ${language}`;
console.log(description);

// lab 2.5
console.log('lab 2.5=============================');
console.log('1==============');

if(population > 33) {
      console.log(`${country}'s population is above average.`)
}
else {
      console.log(`${country}'s population is ${33 - population} million below average.`)
}

console.log('2==============');
