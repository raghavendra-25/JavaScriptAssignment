let obj1 = {
    "channel": "A",
    "name": "shoe"
  };
let obj2 = {
    "channel": "A",
    "name": "electronics"
  };
let obj3 = {
    "channel": "B",
    "name": "apparel"
  };
let obj4 = {
    "channel": "C",
    "name": "electronics"
  };


let arrayList = new Array();
arrayList.push(obj1);
arrayList.push(obj2);
arrayList.push(obj3);
arrayList.push(obj4);

console.log(arrayList);

let ans = function groupObjectsBy(jsonObjects,key){
 let mp = new Map();
 for(let i=0;i<jsonObjects.length;i++){
     if(mp.has(jsonObjects[i][key])){
         mp.get(jsonObjects[i][key]).push(jsonObjects[i]);
     } else {
         let arr = new Array(jsonObjects[i]);
         mp.set(jsonObjects[i][key],arr);
     }
 }
 let obj = {};

 mp.forEach(function(value, key){
     obj[key] = value
 });

 return obj;
}

console.log(ans(arrayList,'channel'));
