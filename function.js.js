function sum(a, b = 0){

 return a + b;

}



let sub = (a, b) => { 

 let r = a - b;

 return r;

};



let expr = prompt("Enter expr: ").trim();



let parts = expr.split(/\s+/);



let num1 = +parts[0];

let num2 = parseInt(parts[2]);

let oper = parts[1];



let executor = (x, y, operFunc) => operFunc(x,y);



let res;

if(oper === "+") res = executor(num1,num2, sum);

else if(oper === "-") res = executor(num1,num2, sub);

else res = executor(x, y, function(a,b){

 return a * b;

});



console.log(res)

