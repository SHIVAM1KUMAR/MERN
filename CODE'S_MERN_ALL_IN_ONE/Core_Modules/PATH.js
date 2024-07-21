let path =require("path");//let path is change by any name like let a OR Xyz
//console.log(path);
console.log(typeof path);

// path ={
//     resolve:function(param1,param2){},
//     delimiter:"sh",
//     basname:function(param....){

//     }
// };

let myPath="D:/MERN/CODE'S_MERN_ALL_IN_ONE/Core_Modules/App.js";

let parsePath=path.parse(myPath);
let dirname=path.dirname(myPath);

console.log(dirname);

