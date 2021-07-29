jackObject = {
   name:'Jack', 
   lastName: 'White', 
   weight: 79, 
   height: 1.70,
}; 

mikeObject = {
   name:'Mike',
   lastName: 'Black',
   weight: 91, 
   height : 1.93,
}; 

const bmiJack = jackObject.weight / Math.pow(jackObject.height,2); 

const bmiMike = mikeObject.weight / Math.pow(mikeObject.height,2); 

console.log(bmiJack); 
console.log(bmiMike); 

if (bmiJack > bmiMike) {
   console.log(`${jackObject.name} ${jackObject.lastName} BMI (${bmiJack}) is higher than ${mikeObject.name} ${jackObject.lastName} BMI (${bmiMike})`); 
} else if (bmiJack < bmiMike) {
   console.log(`${mikeObject.name} ${mikeObject.lastName} BMI (${bmiMike}) is higher than ${jackObject.name} ${jackObject.lastName} BMI (${bmiJack})`); 
}

