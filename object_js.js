let p1 = {

  firstName: "Rauf",

  lastName: "Khudiyev",

  dateOfBirth: new Date(2003, 11, 18),



  fullName (){

    return `${this.firstName} ${this.lastName}`; 

  },



  age: function (){ return new Date().getYear() - this.dateOfBirth.getYear(); },



  toString (){

    return `${this.fullName()} is ${this.age()} years old!`

  }

}



let p2 = {

  firstName: "Atilla",

  lastName: "Sharifli",

  dateOfBirth: new Date(2004, 7, 28),



  fullName: function (){

    return `${this.firstName} ${this.lastName}`; 

  },



  age: function (){ return new Date().getYear() - this.dateOfBirth.getYear(); },



  toString (){

    return `${this.fullName()} is ${this.age()} years old!`

  }

}



console.log(p1.toString())

console.log(p2.toString())

