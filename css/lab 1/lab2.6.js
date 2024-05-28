"use strict"

let Mark_mass, John_mass;
let Mark_height, John_height;
let Mark_BMI, John_BMI;
let markHigherBMI = true;

// cal Mark BMI
let Mark_result = (Mark_mass, Mark_height) => {
return Mark_BMI = (Mark_mass / (Mark_height * Mark_height)).toFixed(1);
}

// cal John BMI
let John_result = (John_mass, John_height) => {
      return John_BMI = (John_mass / (John_height * John_height)).toFixed(1);
}

console.log('======================================2.6.1');
// TEST 1
// console.log(`value for Mark BMI: ${Mark_result(78, 1.69)}`);
// console.log(`value for John BMI: ${John_result(92, 1.95)}`);

// TEST 2
console.log(`value for Mark BMI: ${Mark_result(95, 1.88)}`);
console.log(`value for John BMI: ${John_result(85, 1.76)}`);

console.log('======================================2.6.2');
if(Mark_BMI > John_BMI){
      console.log(`Mark's BMI (${Mark_BMI}) is higher than John's (${John_BMI})!`);
}
else {
      console.log(`John's BMI (${John_BMI}) is higher than Mark's (${Mark_BMI})!`);

}