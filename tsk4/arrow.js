// find the odd number using annonymus fuction
/*var result =[]
var a=function(arr) {
for(var i=0;i<arr.length; i++) {
if(arr[i]%2!==0)
{
result.push(arr[i])
}
}
return result
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));*/

//lusing IIFE function
/*
var result1 = [];
(function (arr) {
for (var i = 0; i < arr.Length; i++) {
if (arr[i] % 2 !== 0) {
result1.push(arr[i]);
}
}
console.log(result1);

})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);*/

//!using arrow function
var result2 =[];
var odd=(arr)=>{
for (var i=0;i<arr.length;i++){
if(arr[i]%2==0)
{
result2.push(arr[i])
return result2
}
}
console.log(odd(1,2,3,4,5))
}