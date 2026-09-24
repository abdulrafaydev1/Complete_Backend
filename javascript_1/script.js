/* 
   console.log(typeof null);            -> object
   console.log(typeof NaN);             -> number
   console.log(typeof Infinity);        -> number
   console.log(typeof []);              -> object
   console.log(typeof {});              -> object
   console.log(typeof function () {});  -> function  

   console.log("10" == 10);    -> true
   console.log("10" === 10);   -> false
   console.log(true == 1);     -> true
   console.log(true === 1);    -> false
   console.log(false == 0);    -> true
   console.log(false === 0);   -> false

   console.log([] == false);   -> true
   console.log([] === false);  -> error
   console.log("" == false);   -> true
   console.log("" === false);  -> false

   let a = "5";
   let b = 2;

   console.log(a + b);         -> 52
   console.log(a - b);         -> 3
   console.log(a * b);         -> 10
   console.log(a / b);         -> 2.5
   console.log(a % b);         -> 1

   let x = "10";
   console.log(+x); 
   console.log(typeof +x); 
   console.log(+"hello"); 
   console.log(typeof +"hello");

   let a = "10";
   let b = 5;
   let c = true;
   let d = null;
   let e = undefined;
   
   console.log(a + b);         -> 555
   console.log(a - b);         -> 5
   console.log(b+ c);          -> 6
   console.log(b - c);         -> 4
   console.log(d + b);         -> 5
   console.log(e + b);         -> 5

   let a = 10;
   let b = a;
   let x = { value: 10 };
   let y = x;
   b = 20;
   y.value = 50;
   console.log(a);             -> 10
   console.log(b);             -> 20
   console.log(x.value);       -> 50
   console.log(y.value);       -> 50

   let a = "5";
   let b = 5;
   let c = true;
   let d = null;
   let e = undefined;
   let f = []; // 1
   let g = {};
   console.log(typeof a);         -> String
   console.log(typeof b);         -> Number
   console.log(typeof c);         -> boolean
   console.log(typeof d);         -> object
   console.log(typeof e);         -> undefined
   console.log(typeof f);         -> object
   console.log(typeof g);         -> object
   console.log(a + b);            -> 55
   console.log(b + c);            -> 6
   console.log(d + b);            -> 5
   console.log(e + b);            -> NaN
   console.log(a == b);           -> true
   console.log(a === b);          -> false
   console.log(f == false);       -> false
   console.log(f === false);      -> false 
*/

let a = "10";
let b = 10;
let c = true;
let d = false;
let e = null;
let f = undefined;
let g = [];
let h = {};

console.log(a + b);
console.log(a - b);

console.log(b + c);
console.log(b - c);

console.log(e + b);
console.log(f + b);

console.log(g + b);
console.log(h + b);

console.log(a == b);
console.log(a === b);

console.log(e == f);
console.log(e === f);

console.log(g == false);
console.log(g === false);

console.log(Boolean(a));
console.log(Boolean(b));
console.log(Boolean(e));
console.log(Boolean(f));
console.log(Boolean(g));
console.log(Boolean(h));

console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(typeof NaN);









