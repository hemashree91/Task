// find the odd number using annonymus fuction
var result =[]
var a=function (arr) {
for(var i=0;i<arr.length; i++) {
if(arr[i]%2==0)
{
result.push(arr[i])
}
}
return result
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));