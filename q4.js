let sa = function SortArray(inputArray){
    this.originalArray = inputArray;
    this.getSortedArray = function(inArray){
      return arraySort(inArray);
    }
    let arraySort = function(arr){
      arr.sort(function(a,b){return a-b;});
      return arr;
    }
  }
  
  let inArray = [12,34,-5,3,24];
  console.log(inArray);
  let sarr = new sa(inArray);
  console.log(sarr);
  let newSorted = sarr.getSortedArray(inArray);
  console.log(newSorted);
  
let soa = function SortObjectArray(originalArray,key){
    this.key = key;
    sa.call(this,originalArray);
    this.getSortedArray = function(inArray,key){
      return arraySort(inArray,key);
    }
    let arraySort = function(arr,key){
      arr.sort(function(a,b){return a[key]-b[key];});
      return arr;
    }
  }
  
soa.prototype = Object.create(sa.prototype);

let inArrayObjects = [{age:24},{age:34},{age:3},{age:22},{age:11}];
let soarr = new soa(inArrayObjects,'age');
console.log(soarr);
let newObjSorted = soarr.getSortedArray(inArrayObjects,'age');
console.log(newObjSorted);
