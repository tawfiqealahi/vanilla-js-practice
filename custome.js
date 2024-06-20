const numbers =-[1,2,3,4,5];
const student = {
   name: 'tawfiq',
   age: '23',
   movies: ['kinno1', 'mastan']
};
const about = `my name is ${student.name} my age is ${student.age} my seeing movie is ${student.movies[1]}`;
console.log(about);


// 2. arrow function

const getFiftyFive = ()=>{
   
};
const isEven = x=>x%2==0;
const addThree = (x,y,z) =>x+y+z;
const doMath=(num1,num2)=>{
   const sum = num1 + num2;
   return sum;
}