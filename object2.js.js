function Person(firstName, lastName,dob, gender='M') {
    this.firstName=firstName;
    this.lastName=lastName;
    this.gender=gender;
    this.dateOfBirth=dob;

    this.fullName=function (){

    return `${this.firstName} ${this.lastName}`; 

  },



  this.age=function (){ return new Date().getYear() - this.dateOfBirth.getYear(); },



  this.toString=function (){

    return `${this.fullName()} is ${this.age()} years old!`

  }


    
}


let p1=new Person("Atilla", "Sharifli", new Date(2004,7,28));
let p2=new Person("Rauf", "Khudiyev",new Date(2003,11,18));
let p3=new Person("Gozal", "Alizada", new Date(2001,10,17),'F');

console.log(p1.fullName());
console.log(p2.age());
console.log(p3.toString());



