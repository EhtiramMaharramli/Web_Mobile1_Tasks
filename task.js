let normalize= word => word.slice(0,1).toUpperCase()+word.slice(1);


let fruits=['apple','banana','pomegranate'];

let res=[];
for (let w of fruits){
    res.push(normalize(w));
}

console.log(res)

