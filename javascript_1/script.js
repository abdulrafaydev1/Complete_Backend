//!-----------!data types + data system------------//
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

   let a = "10";
   let b = 10;
   let c = true;
   let d = false;
   let e = null;
   let f = undefined;
   let g = [];
   let h = {};
   console.log(a + b);            -> 1010
   console.log(a - b);            -> 0
   console.log(b + c);            -> 11
   console.log(b - c);            -> 9
   console.log(e + b);            -> 10
   console.log(f + b);            -> NaN
   console.log(g + b);            -> 11
   console.log(h + b);            -> 11
   console.log(a == b);           -> true
   console.log(a === b);          -> false
   console.log(e == f);           -> true
   console.log(e === f);          -> false
   console.log(g == false);       -> true
   console.log(g === false);      -> false
   console.log(Boolean(a));       -> true
   console.log(Boolean(b));       -> true
   console.log(Boolean(e));       -> false
   console.log(Boolean(f));       -> false
   console.log(Boolean(g));       -> true
   console.log(Boolean(h));       -> true
   console.log(typeof e);         -> object
   console.log(typeof f);         -> undefined
   console.log(typeof g);         -> object
   console.log(typeof h);         -> object
   console.log(typeof NaN);       -> number
*/


//!------Variables & Declarations interview questions------//

/*
Q1, JavaScript mein variable kya hota hai?
Ans, sir javascript ma variable ek box ya container ki kara hota hai jis ma koi bhi data type ya koi bhi value store kar sate hai 

Q2, Variable declaration kya hoti hai?
Ans, sir Variable declaration ya hota hai jub haam Variable ka keyword likha or Variable ka naam likh for example ya ( let name; ) is ko haam bolte hai Variable declaration

Q3, Variable initialization kya hoti hai?
Ans, sir Variable initialization hota hai Variable ky naam ky bad = or Variable value isko bota hai Variable initialization

Q4, Variable declaration aur assignment mein kya difference hai?
Ans, sir Variable declaration aur assignment or ma ya difference ky hai jub jaam kisi Variable ka keyword likhte hai or Variable ka naam likhte hai to isko bolte hai Variable declaration or jub Variable declaration hona ky bad = laga kar value likhte hai to isko bolta hai 

Q5, JavaScript mein variables declare karne ke liye kaun se 3 keywords use hote hain?
And, sir javascript ma variables declare karne ke liye 3 keyword use hota hai phalaa keyword hai ( var ) or second keyword hai ( let ) or third keyword hai ( const ) ya 3 keywords variables declare karte hai

Q6, var, let, aur const ka basic difference explain karo.
Ans, sir ( var ) Variable ka keyword hai or ( var ) ES6 ma ayaa tha or ( var ) ko haam redeclare bhi kar sate hai or reinitialize ya resassign bhi kar sate hai or, ( let ) variables ka keyword hai or ( let ) ko redeclare nahi kar sate likin reinitialize ya resassign kar sate hai or, ( const ) variables ka keyword hai usko na hi redeclare kar sate hai or na hi reinitialize ya resassign kar sate hai

Q7, let name = "Rafay";
    console.log(name);
Ans, sir is code ma ek variables hai or us variables ki value hai ( rafay ) or ya ( rafay ) store ho gaya hai ek variables ma jis ka naam hai ( name ) to console ma haam dekh raha hai naam ko to hama console ma ya value miligi ( "rafay" )

Q8, let age;
    console.log(age);
Ans, sir is code ma ho raha hai ek variables declare kara hai or us variables ko koi value nahi dii to ager kisi variables ma value nahi hote to javascript us variables hon undifiend value daa data hai

Q9, const country = "Pakistan";
    console.log(country);
Ans, sir is code ma ek variables hai or us variables ma value store hai ( pakistan ) to console ma value miligii ( pakistan )

Q10, Kya let variable ko baad mein reassign kar sakte ho?
Ans, g sir ( let ) keyword se bana variables to bad na value reassign kar sate hai

Q11, Kya const variable ko baad mein reassign kar sakte ho?
Ans, nahi yar ( const ) keyword se bana variable to bad ma value nahi reassign kar sate

Q12, var x = 10;
     x = 20;
     console.log(x);
Ans, sir is code ma ya ho raha hai ky ( var ) keyword se ek variable bana hai or or ma us variable ma value to reassign kar raha hai

Q13, let x = 10;
     let x = 20;
Ans, sir is keyword ma yaa ho raha hai ky ( let ) keyword se bana variable ko redeclare kar raha hai to is code ma error ayega ( let ) keyword se bana huwa variable redeclare nahi ho sata

Q14, var x = 10;
     var x = 20;
     console.log(x);
Ans, sir is code ma ya ho raha hai ky ( var ) keyword se bana wuwa variable redeclare kar raha hai to is code ma koi error nahi ayeega kyuu ky ( var ) keyword ma haam value ko redeclare or reassign kar sate hai 

Q15, Ek variable ka naam "user-name" rakhne ki koshish karo. Kya ye valid identifier hai? Kyun?
Ans, sahi hai variable ma naam ma koi javascript ki biuldIn data type nahi rak sate

Q16, JavaScript mein valid variable identifier ke basic rules kya hain?
Ans, sir javascript ky variable ky naam likhna ky kuch identifier rules hota hai jaise ky variable ky naam ma ya ya likha chaiye ( [ Letters (a-z, A-Z), or , digits (0-9), or , _ or , $ ] ) ya kuch variable ky naam likhna ky rules hai

Q17, Kya variable ka naam number se start ho sakta hai?
     let 123name = "Rafay";
Ans, nahi sir

Q18, Kya ye valid hai?
     let $price = 500;
     let _count = 10;
Ans, G sir ya valid hai

Q19, Kya JavaScript variable names case-sensitive hote hain?
     let age = 20;
     let Age = 30;
     console.log(age);
     console.log(Age);
Ans, G sir JavaScript variable ky names case-sensitive hote hain?

Q20, let aur const block-scoped hone ka kya matlab hai?
Ans, G sir ( let or const ) ya keywords block-scoped hota hai block-scoped ka matlab hai ky kisi bhi {} ky ander

Q21, var function-scoped hone ka kya matlab hai?
     let x = 10;
     {
     let x = 20;
     console.log(x);
     }
     console.log(x);
Ans, G sir ( var ) keyword functional-scoped hota hai functional-scoped ka matlab hai ky ager ( var ) keyword se bana wuwa variable hai to is ky {} bahar bhi access ho sata hai 

Q23, var x = 10;
     {
     var x = 20;
     }
     console.log(x);
Ans, is code ka output hoga ( 20 )

Q24, var aur let ke block scope behavior mein difference explain karo.
Ans, sir var block scope nahi hota likin let block scope hota hai 

Q25, Kya const declaration ke waqt value dena mandatory hai?
     const x;
Ans, G mandatory hai

Q26, Difference explain karo:
     let x;
     let x = undefined;
Ans, sir phale wala ma hama variable ko koi value nahi dii javascript ka variable ko undefined daga or second wala variable ko hama khud undefined value dii hai

Q27, Kya variable declare karna aur variable ko value dena same operation hai?
Ans, nahi

Q28, let x = 10;
     {
     let x = 20;
     }
     console.log(x);
     Outer x ki value kya hogi?
Ans, 10

Q29, Variable shadowing kya hoti hai?
Ans, Variable shadowing tab hoti hai jab inner scope mein same naam ka variable declare kiya jaye jo outer scope ke variable ko temporarily hide kar deta hai.

Q30, Example ke saath explain karo ke inner scope outer variable ko shadow kaise karta hai.
Ans, Jab inner scope mein same naam ka variable declare hota hai, to inner scope ke andar outer variable temporarily hide ho jata hai. Isay variable shadowing kehte hain.

Q31, Hoisting kya hoti hai?
Ans, sir Hoisting ya hoti hai ager variable bad na bana or us variable ko pahlee access karna ki kooshi kare to usa Hoisting kahte hai or Hoisting tino variable keywords ma hote hai 

Q32, Kya var hoist hota hai?
Ans, G sir hota hai

Q33, Kya let hoist hota hai?
Ans, G sir hota hai

Q34, Kya const hoist hota hai?
Ans, G sir hota hai

Q35, console.log(x);
     var x = 10;
     Output kya hoga?
Ans, sir iska ouput hoga undifiend

Q36, console.log(x);
     let x = 10;
     Output/error kya hoga?
Ans, sir is code ma error ayeega


*/

