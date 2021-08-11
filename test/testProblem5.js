const inventory = require("../inventory");
const problem4=require("../problem4");
const problem5=require("../problem5");

let result = problem5.problem5(problem4.problem4(inventory)).length;
console.log(result);
