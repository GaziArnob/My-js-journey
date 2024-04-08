console.log("hello world!");
 //hdsfhghfghgdf
 console.log("hello all");
 //djhdhhjhjhhhjjhjhxhfhjxhjwhjj hhjj
 //jjjkjkfjkfjskjs
 let a =3
 let b = 2 
 console.log("a + b =", a + b) ;
 console.log("a -b=", a - b) ;
console.log("a%b",a%b);
  console.log("a ** b", a**b) ;
  //a++=a+1, a--=a-1

  //unary operator
  //inrement operator
  a++;//4
  console.log("a++=",a);//4
  //decrement operator
  a--;//2
  console.log("a--",a );//2
  console.log("--a=", --a);

 

//logical operators
let a = 6;
let b = 5;
let cond1 =a > b; //true
let cond2 = a===6; //true
console.log("cond && cond2", cond1 && cond2);
  console.log("cond1 || cond2 ", a <  b || a===6);
  console.log("!(6<5)=", !(a===6)); // true

//assignment oerators

  // conditional statements
let age = 25

if(age>18) {
    console.log("you can vote");
}

if(age<18) {
    console.log("you cannot vote");
}

let mode= "dark";
let coler;

if(mode ==="dark") {
    coler = "black"

}

if (mode === "ligt"){

coler="white";
}

console.log(coler);

let age = 25
if(age>=18){
    console.log("vote") ;
} else{
    console.log("not vote");
}

//odd or even'
let num =7

if(num%2===0)
 {

    console.log("even");

}else{
    console.log("odd");
} 

//else-if statment

let mode = "dark";
let coler;

if (mode==="dark")
{
    coler ="black";

} else if (mode === "blue") {

   coler = "blue";

}else if (mode ==="pink") { 
    coler ="pink" ;

} else {
    coler ="white"
}

console.log(coler);

//ternary operator

let age = 25

let result = age >=18 ? "adult" : "not adult" ;

console.log(result);
  
// for multipal condition

let age = 16 ;

age >= 18 ? console.log( "adult") : console.log( "not adult") ;

let num = prompt ("enter a number") ;
 

if (num %5 === 0){
console.log(num,"is multiple of 5");
} else{
    console.log(num, "is not multiple of 5")
}

// practice
let score = 75

let grade;

if(score >=90 && score <=100) {
    grade = "A"

} else if (score >= 70 && score <=89) {
    grade = "B"
} else if (score >=60 && score <=69 ){
    grade = "c"
}
 
console.log("according to your grade was :", grade );



// loops(for,while)

for (let count=1;count<=5;count++){
    console.log(" monster gaming");
}

console.log("loop has ended");

let sum= 0;

for( let i= 1; i<=5; i++) {
    sum=sum+ i;
} 
console.log("sum=",sum);

console.log("loop has ended");

// print 1 to 5

for (let i =1; i<=5;i++){
    console.log("i=",i);
}

// infinite loop (never use this loop)

// while loop
 let i = 1;

while(i <= 5)
{
    console.log("i=", i);
    i++;
}
//do loop
let i = 1;

do {
    console.log("i=", i);
    i++;
} while(i<=10) ;

// for-of loop
 
let str ="monster gaming";
let size = 0;
for(let i of str){
    console.log("i=",i);
    size++
}
console.log("string size =", size);

//for in loop

let student = {
    name : "gazi arnob",
    age : 20,
    cgpa : 7.5,
    ispass : true,

};
for (let key in student) {
    console.log("key=",key,"value=", student [key]);
}

 //Asigenment operators (problenm ase )
 //a +=4;//a=a+4
 console.log("a =", a) ;
 a**=4; // a = a ** 4
 console.log("a=", a);
 console.log("a === b" , a === b );
 console.log("a !== b" , a !== b);
 console.log(" 3 > 2 " , a > b);
 console.log("3>=3" , a>=b) ;

let a = 6;
let b = 5;
let cond1 =a > b; //true
let cond2 = a===6; //true
console.log("cond && cond2", cond1 && cond2);
  console.log("cond1 || cond2 ", a <  b || a===6);
  console.log("!(6<5)=", !(a===6)); // true

  let num = prompt("enter a number:");

  if(num % 5 === 0) {
    console.log(num, "is multiple of 5");
  } else {
    console.log(num, "is not multiple of 5");
  }

  // practice

 for(let num =0; num<= 100; num++) {
    if (num % 2 === 1) // odd number   
   { console.log("num=", num);}
  }

  // practice

  let gameNum = 25;
  
  let userNum = prompt("Guess the game number : ") ;

  while( userNum != gameNum) {
    userNum = prompt("you entered wrong number. guss again ");
  }
  
  console.log("congratulation, you entered the right number");

  //strings
  //let str = "monstergaming";
 let str2 = "gaziarnob";//
 //let sum=0;
 for(let i=1 ;i<=1000; i++){
    sum=sum+i;
 }
 console.log("sum=" ,sum);
 console.log("loop has ended");
for(let i=1;i<100;i++){
    console.log("i=",i);
}
let str= "monster gaming";
for(let i of str) {
    console.log("i=",i);
}

 
let str= "monster gaming";
let size = 0;
for(let i of str) {
    console.log("i=",i);
    size++;
}

console.log("string size=",size);
let student ={
    name:"gazi arnob",
    age:22,
    cgpa:7.5,
    ispass:true 
};

for(let key in student  ) {
    console.log("key",key, "value", student[key]);
}


let gameNum= "26";
let userNum =prompt("guss the game number :" );
while(userNum != gameNum) {
    userNum = prompt("tou entered wroung number, guss again :")
}
  console.log("congeatulation,tou entered right number");

//string

let str="monster gaming";
let str2='gazi arnob';
console.log(str[10]);

let specilalStrin = `hello everyone welcome to our channel`;
console.log(specilalStrin);

let obj ={
    item : "pen",
    price : 20,

};
 
let output =`the cost of ${obj.item} is ${obj.price} tk`;
console.log(output);

let obj ={
    name: "arnob",
    cgpa :"3.52",
}
let output = `the name of the student is ${obj.name} and he his cgpa is ${obj.cgpa} and this is very good reaslt `;

console.log(output);

//back slash
console.log("monster\ngaming\nhe\nis\tvery good player");

let str ="monster gaming";
 str=str.toLowerCase()
console.log(str);

let str2 ="      monster gaming      ";
console.log(str.trim());  
let str3="0123456789"
console.log(str3.slice(1,8));

let res= str2.concat(str3);

console.log(res);

let res2 ="i am gazi sajid salman" +str2 +str3;//conect str

console.log(res2); 

let str4="suck";
console.log(str4.replace("s","f"));
console.log(str4.charAt(3));

let marks =[97,82,80,70];
console.log(marks);

let student = ["Arnob","mone","nafiz","mahi"];
console.log(student);

for(let inx=0; inx< student.length;inx++) {
    console.log(student[inx]);
}
// for of

for (let student of student) {
    console.log(student.touppercase);
}
let marks=[85,97,44,37,76,60];

let sum =0;

for(let val of marks) {
    sum += val
}
let avg = sum / marks.length;
console.log(`avg marks of the class=${avg}` );

let items =[250,645,300,900,50];

for(let val of items){
    console.log(`value of item=${val}`)
}

for (let i =1 ; i <=5;i++ ) {
    console.log("monster gaming");
} 

let sum=0;
for(let i=1;i<=100;i++ ){
    sum=sum+i
}
console.log("value of sum=", sum);
let i=1;
while(i<=10){
    console.log("monsster gaming");
    i++
}

 let  i=30;

 do{
    console.log("moster gaming=",i);
    i++
 }
 while(i<=50);
 
 let str= "monster gaming";
let size=0;
 for(let i of str){

    console.log(i);
    size++
 }

 console.log("string size =",size)

 let student={
    name : "gazi arnob",
    age: 22,
     cgpa:3.52,
    

 };

 for(let key in student) {
    console.log("key=",key,"value=",student[key])
 }

 let sum=0;

 
for(i=1;i<=100;i++)
{
    if(i%2==0){
    console.log("num=",i);
    }
}
let userNumber= prompt("enter the correct number");
let gameNumber= 25;
while(userNumber!= gameNumber){
 userNumber =   prompt("try again");

}
console.log("congratlation you entered right number");


let idx = 0;
for (val of items){
    console.log(`value of idx ${idx} = ${val}`);
    let offer= val/10;
    items[idx] =items[idx]-offer
   console.log(`value after offer${items[idx]}`) ;
   idx++;
  
}

let items =[250,640,600,350,440];
 
for(let i=0;i<items.length;i++) {
    let offer =items[i]/10;
    items[i]-= offer;
}
console.log(items) ;

//arrays in JS
let foodItems=["potato,apple,orange,tomato"];
foodItems.push("chips","burger");
console.log(foodItems);

let foodItems=["potato","apple","orange","tomato"];
console.log(foodItems);
let deletedItems = foodItems.pop();
console.log(foodItems);
console.log("deleted",deletedItems);

let marvelHero =["ironman","thor","captain amarica"];

let animeHero =["naruto","luffy","ichigo","goku"];

let hero = marvelHero.concat(animeHero);

console.log(hero);

let heros=["naruto","luffy","ichigo","goku","saitama"];

console.log(heros.slice(1,3));

let animeHero = heros.splice(2,2,mark,axel);

console.log(animeHero);

let companies =["bloomberg","microsoft","uber","google","IBM","netflix"];

companies.splice(6,0,"amazon");

//function

//function sum(x,y){
 //   console.log(x+y);
//}

function sum(x,y){//note: like local variables of function has a block scope
    s=x+y;
    return s;
}
let val = sum(3,5);
console.log(val);

function sum(a,b) {
    return a + b;
}
const arrowSum = (a ,b) =>{
    console.log(a +b)
};
function mul(a, b) {
    return a * b;
}
 
const arroeMu = (a,b) => {
    console.log(a*b);
};

//or
const arrow =(a,b) =>{
    return a*b;
};

function countVowels(str) {
  
    let count=0;
    for (const char of str)
    {
    if(char ==="a" || char ==="e" || char=== "i" || char==="o" || char ==="u")
    
    {count++;

}

}
return count; 
}
const arrowVow =(str) =>  {let count=0;
for (const char of str)
{
if(char ==="a" || char ==="e" || char=== "i" || char==="o" || char ==="u")

{count++;

}
 
}
return count; 
}

let arr=["sherpur","dhaka","sylet"];

arr.forEach((val,idx,arr) => {
    console.log(val.toUpperCase(),idx,arr);
});

 let nums =[1,2,3,4,5];

nums.forEach((nums) => {
    console.log(nums * nums);
});

let nums =[69,56,34];

let newArr = nums.map((val) => {
    return val * val
})
console.log(newArr);

let newArr =[1,2,3,4,,6];

let evenArr = newArr.filter((val) =>{
return val >3;
});
console.log(evenArr);
let arr = [1,2,3,4,5,6,7];
let output = arr.reduce((res,curr)=>{
    return res+curr;
});

console.log(output);

let arr = [1,2,3,4,5,6,7];

let output =arr.reduce((prev,curr) =>{
   return prev > curr ? prev :curr;
});

console.log(output);

let marks =[87,90,92,93,91,65];

let output = marks.filter((val)=> {
 return  val >90;
})
console.log(output);

let n = prompt("enter a number :");
let arr=[1,2,3,4,5,6,7];
for(i=1;i<=n;i++){
arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res,curr) =>{
    return res*`curr;
})

console.log(sum);
console.log(document.body);
console.dir(document.body);
 let heading = document.getElementById("heading");
 console.dir(heading);
 let headings =  document.getElementsByClassName("heading-class");
 console.dir(headings);
 console.log(headings);

 let pargrah = document.getElementsByTagName("p");
 console.dir(pargrah);
 
 let elements = document.querySelectorAll("p");//for all deta
 console.dir(elements);
 
 let element = document.querySelector("p");
 console.dir(element);

 let firstele= document.querySelector("#myId")
 console.dir(firstele);

 let secendele =document.querySelector(".heading-class");
 console.dir(secendele);

 let div =document.querySelector("div");
 console.dir(div);

 let heading = document.querySelector("h1");

 let h2 = document.querySelector("h2");

 h2.innerHTML = h2.innerHTML +"from monstrer gaming student";

 let divs = document.querySelectorAll(".box");
for(div of divs) {
    console.log(div.innerText);
}
 divs[0].innerText ="new uniqe valu 1";
 divs[1].innerText ="new uniqe valu 2";
 divs[2].innerText ="new uniqe valu 3";*

 let divs = document.querySelectorAll(".box");

 let idx  =1;
 for(div of divs){
    div.innerText =`new value ${idx}`;
    idx++;
 }
 console.log(divs);


 let div = document.querySelector("div");

console.log(div);

let id = div.getAttribute("id");

console.log(id);

let name = div.getAttribute("name");
console.log(name);
let para = document.querySelector("p");
console.log(para.setAttribute("class","new class"));

let newButton = document.createElement("button");
newButton.innerText ="click me";
console.log(newButton);

let divss = document.querySelector("divss");
div.prepend(newButton);

let A =document.createElement("h1");

A.innerHTML ="<i>hi, iam arnob</i>";

document.querySelector("body").prepend(A);

let B= document.querySelector("p");

B.remove();
A.remove();

let c = document.createElement("button");
c.innerText="click me";

c.style.color ="white";
c.style.backgroundColor="red";
document.querySelector("body").prepend(c);

let D= document.querySelector("p");

D.classList.add("newBox")

let btn1= document.querySelector("#btn1");
btn1.onclick=() =>{
    console.log("btn1 was  clicked");
    let a = 25;
    a++;
    console.log(a);
};
let  div =document.querySelector("div");

div.onmouseover= () => {
    console.log("you are inside div");
}
//white dark background changes
let mode = document.querySelector("#mode");
let currmode="light";
mode.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currmode);
})
let mode = document.querySelector("#mode");
let currmode="light";
let body =document.querySelector("body");
mode.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
       body.classList.add("dark") ;
     body.classList.remove("light");
    }else{
        currmode="light";
       body.classList.add("light");
       body.classList.remove("dark");
    }
    console.log(currmode);
})

//moouseover practice

let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#rest-btn");

let turn1 = true;

let  winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
     
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn1){
            box.innerText="o";
            turn1=false;
        } else {
            box.innerText="X";
            turn1=true;
        }
        box.disabled=true;
        chackWinner();
    });
});

const chackWinner =() =>{
   
    for(let pattern of winPatterns) {
    console.log(pattern);
    }

}
let item=[250,650,450,600,300];
let i=1;
for(value of item){
    let offer = value/10;
    item[i]=item[i]-offer;
    console.log(`value after offer = ${item[i]}`);
}










  
 

 




 























