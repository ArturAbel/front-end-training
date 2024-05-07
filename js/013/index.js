// console.log(a); // What will be the output?           undefined
// var a = 5;
// console.log(b); // What will be the output?        Not initialized
// let b = 5;
// console.log(c); // What will be the output?        Not initialized
// const c = 5;







// console.log(myFuncDecl()); // What will be the output?      No issues
// function myFuncDecl() {
//  return "Hello from function declaration!";
// }
// console.log(myFuncExpr()); // What will be the output?         Not a function
// var myFuncExpr = function() {
//  return "Hello from function expression!";
// }






// const x = "global";
// function outerFunc() {
//  let y = "outer";
//  function innerFunc() {
//  var z = "inner";
//  console.log(x); // What will be the output?             `Global`
//  console.log(y); // What will be the output?             `Outer`
//  }
//  innerFunc();
//  console.log(z); // What will be the output?             `undefined`
// }
// outerFunc();






// const a = 1;

// function b() {                                           //10  
//                                                          //1                  
//  const a = 10;                                           //undefined
//  c();                                                    
//  return;                                                   
//  function c() {
//  console.log(a); // What will be the output?                        
//  }
// }

// b();                                                     //function call
// console.log(a); // What will be the output of a?         //Outside the function
// foo();                                                   

// function foo() {
//  console.log(x); // What will be the output?
//  var x = "Hello, world!";
//  bar();
//  function bar() {
//  console.log(x); // What will be the output?
//  let x = "Hello, scope!";
//  }
// }