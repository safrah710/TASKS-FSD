//task 3

//QUESTION 1
//q:1 ANONYMOUS FUNCION 
var n= function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            console.log(arr[i]);}}}
arr=[2,3,4,5,6,7,8,9];
n(arr);
//iife function
var arr=[2,3,4,5,6,7,8,9];
(function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            console.log(arr[i]);}}})(arr)
//_____________________________________________________________________

//q.2
//anonymous function
var str=["safee","rahman","kumar","raj"]
var change=function(str){
    for(var i=0;i<str.length;i++){
    var news=str[i];
    var news2=news.charAt(0).toUpperCase()+news.slice(1);
    console.log(news2);
}}
change(str)
//iife function
var str=["safee","rahman","kumar","raj"]
(function(str){
    for(var i=0;i<str.length;i++){
        var news=str[i];
        var news2=news.charAt(0).toUpperCase()+news.slice(1);
        console.log(news2);}}
)(str)
//_____________________________________________________________________
//q.3
//anonymous function
var arr=[1,2,3,4,5]
var sum =0
var sum1=function(arr){
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log(sum);
}
sum1(arr);
//iife function
arr=[1,2,3,5,4]
sum=0;
(function(arr){
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log(sum);
})(arr)
//_____________________________________________________________________
//q.4
//anonymous function
var arr=[2,3,4,6,8,9,7,12,32]
var n=function(arr){
    for(var i=0;i<arr.length;i++){
        var c=0;
        for(var j=2;j<arr[i];j++){
            if(arr[i]%j==0){
                c++;}}
        if(c==0){
            console.log(arr[i]);}}}
n(arr);

// iife function
var arr=[2,3,4,5,8,0,67,54,32]
(function(arr){
    for(var i=0;i<arr.length;i++){
        var c=0;
        for(var j=2;j<arr[i];j++){
            if(arr[i]%j==0){
                c++;}}
        if(c==0){
            console.log(arr[i]);}}})(arr)
//_____________________________________________________________________
//q.5
//anonymous function
var arr1 = ["safee","mom","malayalam","daddy"];
var palin=function(arr1){
    for(var i=0;i<arr1.length;i++){
        newstr=arr1[i].split('').reverse().join('')
        if(newstr==arr1[i]){
            console.log(arr1[i]);
        }
    }
}
palin(arr1);

//iife function
var arr1 = ["safee","mom","malayalam","daddy"];
(function(arr1){
    for(var i=0;i<arr1.length;i++){
        newstr=arr1[i].split('').reverse().join('')
        if(newstr==arr1[i]){
            console.log(arr1[i]);
        }
    }
})(arr1)
//_____________________________________________________________________
//q.6
//anonymous function
var safee= function(arr1, arr2) {
    let mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  
    let length = mergedArray.length;
    if (length % 2 === 0) {
      let mid1 = mergedArray[length / 2 - 1];
      let mid2 = mergedArray[length / 2];
      return (mid1 + mid2) / 2;
    } else {
      return mergedArray[Math.floor(length / 2)];
    }
  }
  
  // Example usage
  var arr1 = [1, 3, 5];
  var arr2 = [2, 4, 6];
  
  var median = safee(arr1, arr2);
  console.log("Median:", median);

//iife function
var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6];

var median = (function(arr1, arr2) {
  let mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);

  let length = mergedArray.length;
  if (length % 2 === 0) {
    let mid1 = mergedArray[length / 2 - 1];
    let mid2 = mergedArray[length / 2];
    return (mid1 + mid2) / 2;
  } else {
    return mergedArray[Math.floor(length / 2)];
  }
})(arr1, arr2);

console.log("Median:", median);
//_____________________________________________________________________
//q.7
//anonymous function
var arr1=[1,1,1,2,3,4,5,5,5,6,7]
var dublic=function(arr1){
    var set=new Set(arr1);
    var arr2=Array.from(set);
    return arr2;
}
var saf=dublic(arr1);
console.log(saf);

//iife function
var arr1=[1,1,1,2,3,4,5,5,5,6,7]
var saf=(function(arr1){
    var set=new Set(arr1);
    var arr2=Array.from(set);
    return arr2;
})(arr1)
console.log(saf);
//_____________________________________________________________________
//q.8
//anonymous function
var arr1=[1,2,3,4,5,6]
var k=5
var rot=function(arr1,k){
    for(var i=0;i<k;i++){
        arr1.unshift(arr1.pop());
    }
    return arr1;
}
var saf=rot(arr1,k);
console.log(saf);

//iife function
arr1=[1,2,3,4,5,6,7]
k=3;
var saf=(function(arr1,k){
    for(var i=0;i<k;i++){
        arr1.unshift(arr1.pop());
    }
    return arr1;
})(arr1,k)
//_____________________________________________________________________

//__________________________________________________________________________________________________________________________________________

//question 2


//q.1
var n=(arr)=>{
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            console.log(arr[i]);}}}
arr=[2,3,4,5,6,7,8,9];
n(arr);
//_____________________________________________________________________

//q.2
var str=["safee","rahman","kumar","raj"]
var change=(str)=>{
    for(var i=0;i<str.length;i++){
    var news=str[i];
    var news2=news.charAt(0).toUpperCase()+news.slice(1);
    console.log(news2);
}}
//_____________________________________________________________________

//q.3
var arr=[1,2,3,4,5]
var sum =0
var sum1=(arr)=>{
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log(sum);
}
sum1(arr);
//_____________________________________________________________________

//q.4
var arr=[2,3,4,6,8,9,7,12,32]
var n=(arr)=>{
    for(var i=0;i<arr.length;i++){
        var c=0;
        for(var j=2;j<arr[i];j++){
            if(arr[i]%j==0){
                c++;}}
        if(c==0){
            console.log(arr[i]);}}}
n(arr);
//_____________________________________________________________________

//q.5
var arr1 = ["safee","mom","malayalam","daddy"];
var palin=(arr1)=>{
    for(var i=0;i<arr1.length;i++){
        newstr=arr1[i].split('').reverse().join('')
        if(newstr==arr1[i]){
            console.log(arr1[i]);
        }
    }
}
palin(arr1);
//_______________________________________________________________________________________________________________________________
