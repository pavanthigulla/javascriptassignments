//assignment3
const printName=(name)=>"Hi"+name;
console.log(printName("pavan"));


const printBill=(name,bill)=>`Hi ${name},please pay:${bill}`;
console.log(printBill("pavan","Rs 10"))



const person={
    name:"Noam chomsky",
    age:92
}
const {name,age}=person;
console.log(name);
console.log(age);