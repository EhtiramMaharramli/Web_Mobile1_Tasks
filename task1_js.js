let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 100, 100, 10, 20, 30, 40, 50, 60, 70, 80];
let mn = 1000000;
let mx = -999999;
let sm = 0;
let avg;

for (let i = 0; i < arr.length; i++) {
    if (mn > arr[i]) {
        mn = arr[i];
    }
    if (mx < arr[i]) {
        mx = arr[i];
    }
    sm = sm + arr[i];
}

avg = sm / arr.length;

console.log("Sum:", sm);
console.log("Average:", avg);
console.log("Minimum:", mn);
console.log("Maximum:", mx);
