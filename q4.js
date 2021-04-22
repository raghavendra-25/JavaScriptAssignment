function SortArray(inputArray){
  this.originalArray = inputArray;
  this.getSortedArray = function(){
    return arraySort(this.originalArray);
  }
  let arraySort = function(arr){
    arr.sort(function(a,b){return a-b;});
    return arr;
  }
}

let inArray = [12,34,-5,3,24];
console.log(inArray);
let sarr = new SortArray(inArray);
console.log(sarr);
let newSorted = sarr.getSortedArray();
console.log(newSorted);

function SortObjectArray(originalArray,key){
  this.key = key;
  SortArray.call(this,originalArray);
  this.getSortedArray = function(){
    return arraySort(this.originalArray,this.key);
  }
  let arraySort = function(arr,key){
    arr.sort(function(a,b){return a[key]-b[key];});
    return arr;
  }
}

SortObjectArray.prototype = new SortArray();

let inArrayObjects = [{age:24},{age:34},{age:3},{age:22},{age:11}];
let soarr = new SortObjectArray(inArrayObjects,'age');
console.log(soarr);
let newObjSorted = soarr.getSortedArray();
console.log(newObjSorted);
