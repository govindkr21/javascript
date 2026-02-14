//++++++++++++++++++++++++
// stack memory  and heap memory 

// stack memory (primitive) -  always use call by value. always have a copy of the data.
// heap memory (non-primitive) -  always use call by reference. always have a reference of the data.

let myName = "Govind"

let anotherName = myName
anotherName = "heera bete"
console.log(anotherName);
console.log(myName);
 let user1 = {
    email: "govind@gmail.com",
    upi: "user@ybl", 
 }
console.log(user1);
let user2 = user1
user2.email = "heera@gmail.com"
console.log(user2);
console.log(user1);
// heap ke andr reference pass hota hai isliye dono me change hota hai 
// stack ke andr value pass hota hai isliye change nhi hota hai 
