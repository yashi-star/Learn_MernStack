console.log("hello world");
console.log(2+5);

 //type consversion
//implicit conversion
res='3'+2;
console.log(res);
console.log(typeof res);
//string + number=string         string-num=number               num+string=string       num-string=number
//string +bool=string            string-string=number/NAN            num+/-bool=num
//string+undefined=string        string-bool=number               number+/-null=number
//string+null=string              string-null=number              number+/-undefined=NAN

//explicit conversion

res="3";//null
res=Number(res);
console.log(typeof res);//number

res="3";//null
res=String(res);
console.log(typeof res);//string

res=-20.22;
res=parseInt(res);//20
console.log(typeof res);//number

res=-20.22;
res=parseFloat(res);//20.22
console.log(typeof res);//number


// --------------------------------------------------------------------------------------

//variables-used to store something
//variables can start with either letter or underscore or dollar 
//later on variable can contain number alphbet 
let a=5;
console.log(a);

let myName="drop";
console.log(myName);//drop
console.log("myName");//myName

let n="a";
let n="c";
console.log(n); //error

let k="a";
k="c";
console.log(k); //c

// ========================================

var b=3;
console.log(b);//3

var name="abc";
var name="john";
console.log(name);//john

//+++++++++++++++++++++++++++++++++++++===

const c=4;
console.log(c);//4

const s="a";
s="c";
console.log(s); //error

// +++++++++++++++++++++++++++++++++++++=


e=2;//not a good practice
console.log(e);//2

"use strict"//if we use strict it will give error that var is not defined
d=2;
console.log(d);//error

// ---------------------------------------------
//OPERATORS
//Airthmatic  +,-,*,/,%,**
//Inc/Dec    a++,--a,++a,a--
//Comparison  >,<,==,===,>=,<=,!=,!==
//Logical    ||(or) &&(and) !(not)

//Conditionals--- if-else ,else if ,nested if
let age=18;
let name="john"
if(age>=18){
    if(name=="john"){
    console.log("ok");
}
else{
    console.log("not john");
    }}
else{
    console.log("no");
    
}
    

//switch statement
switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }

  //loops
  for(var i=0;i<10;i++){
    console.log(i);
  }

  var i=10;
  while(i<=1){
    console.log(i);
    i++;
  }

  do{
    console.log(i);
    i++;
  }while(i<=1)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//functions
    function name(){
        console.log("hello");    
    }
    name();//fn call


    function fname(a){
        console.log("hello"+a);    
    }
    name("learners");//fn call


    function add(a,b){
      return a+b;
    }
    let x=10;
    let y=3;
    let ad=add(x,y);
    console.log(add);
    

    let a=5;//global scope
    function local(){
        let b=4;//local scope
       console.log(a);//5
       console.log(b);//4  
    }
    local();
    console.log(a);//5
    console.log(b);//error
    

//////////////////////////////////////////////////////////

//types of functions

    //anonymous function when u donot give fn name
    let fun=function(){
        console.log("hello");    
    }
    fun();


    //self invoke function or immeddiately invoked fn
    (function(){
        console.log("hello");    
    })();


    //arrow function
    let aa= (a,b)=>{
        return a+b;}
    console.log(aa(2,3));
     //or
     let aab=(a,b)=>console.log(a+b);
     aab(2,4);
     

////////////////////////////////////////////////

//array
let name=["john","jane","cena",1,null,true,undefined];
console.log(name);
console.log(name[0]);//john
console.log(name.length);//7
name.push("cena");
name.unshift("cena");//pushed at first place
name.splice(1,3);//["john",null,true,undefined]
name.splice(1,0,"cena");//["john","cena",null,true,undefined]

 let arr=[1,2,3,4,5,0];

for(let i=0;i<arr.length,i++){
    console.log(arr[i]);
}

arr.forEach((val,index,array)=>{
    console.log(val+" "+index+" "+array); 
 })//it will not get stored in another array 
 
//so for that youcan use map
 let ac=arr.map((val)=>{
    return val+50;
 })
 console.log(ac);
 

//for in loop
let arrr=[10,20,30,40];
for(let ar in arrr){
    console.log(ar);//index will we printed 0,1,2,3
    console.log(arrr[ar]);//values will be printed
}


//for of loop
let arrr=[10,20,30,40];
for(let ar of arrr){
    console.log(ar);//values will be printed directly
}


 // array operations
 let num1=[1,2,3,4,5];
 let num2=[6,7,8,9,0];
 console.log(num1.concat(num2));
 console.log(num1.sort());
 console.log(num1.reverse());
 console.log(num1.indexOf(2));//1
 let xx=num1.slice(1,4);
 console.log(xx);//2,3,4
 let xx=num1.splice(1,4);
 console.log(num1);//1,5
 console.log(num1.toString()); //converted to string
 
 let a =num1.filter((val,index,array)=>{
    if(val>=1 &&val<=5){
        return val;
    }
    console.log(a);//give values acc to given condition 
 })

 let a =num1.find((val,index,array)=>{
        return val==1;
    console.log(a);
 })

 let a =num1.findIndex((val,index,array)=>{
    return val==1;
console.log(a);//index of 1st occurance
})
 
let a =num1.findLastIndex((val,index,array)=>{
    return val==1;
    console.log(a);//index of last occurance
})
 
num2.split(',')
num2.forEaach(ele=>{
    console.log(ele);//6 7 8 9 0
})

let cc=num2.join("and");
console.log(cc);//6and7and8and9and0


/////////////////////////////////////////////////////

//map function
const numb=[1,2,3,4,5,6];
let det=numb.map((val,index,array)=>{
  return  `Index ${index} : ${num} (from array ${array})`//Index 0 : 1 (from array 1,2,3,4,5,6).....so on
})
console.log(det);
//or
let det=numb.map(val=>val*val);
  console.log(det);//sq of array elements

//multidimensional array
let arr=[
    ["j",30],
    ["t",20],
    ["r",40]
]
console.log(arr);//0: [j,30]   1:[t,20]...
console.log(arr[2]);// [r,40]  
console.log(arr[1][1]);// 20

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        console.log(arr[i][j]);
    }}

//or
arr.forEach(ele=>{
    ele.forEach(val=>{
        console.log(val);  
    })
})
//or
for (ar of arr){
    for(i of ar){
        console.log(i);
 }}


 ////////////////////////////////////////////////////////////


 //copy and spread
 arr1=["jo", 1,true];
 arr2=arr1;//both same 
 arr1.push("berg")//if we push anything it will get copied in arr2 vicee versa

 arr1=["jo", 1,true];
 arr2=["jo", 1,true];
 arr2.push("berg");//only arr2 will get changed

 arr1=["jo", 1,true];
 arr2=[...arr1];
 arr2.push("berg")//only arr2 will get changed

/////////////////////////////////////////////////////

//Array destructing
let array1=["th","mos","cha","ad"];
let [item1,item2,...item3]=array1;//th,mos,[ch,ad]


////////////////////////////////////////////////

//objects
let obj={
    "name":"bravo",//name is key bravo is value
    "age":21,
    "last name":"john",
    fun:function(){
        console.log("i m function"); 
    },
    arr:[2,3,4]
}

console.log(obj.name);//bravo
console.log(obj["age"]);//21
obj.fun();//i m function
console.log(obj.arr);//2 3 4
console.log(obj);//all values will get displayed
obj.key="item"// key:item will get inserted
let a="key2"
obj[a]="item2"//key2:"item2"

for (let i in obj){
    console.log(i);//all keys will get printed
    console.log(obj[i]);//all values will print
}
//or
for (let i in Object.keys(obj)){
    console.log(i);//all keys will get printed
    console.log(obj[i]);//all values will print
}

//objects inside arr
let arr=[
        {user:1,name:"ta"},
        {user:2,name:"tata"},
        {user:4,name:"tate"}
]

console.log(arr);//all values will get printed
console.log(arr[0]);//{user:1,name:"ta"}

for(let i in arr){
    console.log(i);//index will get print
    console.log(arr[i]);//all values  will get printed
    console.log(i.name);//name will get printed
    
    let [{name},item2]=arr;// ta  {user:2,name:tate}
    let [{name},item2,{name:name1}]=arr;// ta , {user:2,name:tata} ,tate  we also change thename otherwise it would have given error for same name reference
    
}


/////////////////////////////////////////////////

//function inside function
function fun1(){
    console.log("fun1");
    function fun2(){
        console.log("fun2");
    }
    fun2();//fun2
}

fun1();//fun1
fun2();//error becoz its inside another fn so we will call it inside fun1 only


/////////////////////////////////////////////////////

//lexical scope
function fun1(){
    var a=1;
    console.log("fun1"+a);
    function fun2(){
        console.log("fun2"+a);}
    fun2();//fun2 1
}
fun1();//fun1 1


function fun1(){
    var a=1;
    console.log("fun1");
    function fun2(){
        var a=5 ;
        console.log("fun2"); }
    fun2();//fun2 5
}
fun1();//fun1 1


var a=1;
function fun1(){
    console.log("fun1");
    function fun2(){
        console.log("fun2"); }
    fun2();//fun2 1
}
fun1();//fun1 1

//////////////////////////////////////////////////

//Debugger--used to debug the error in code
function fun(){
    debugger;
    for(let i=0;i<10;i++){
        console.log(i);
    }}
fun();

//////////////////////////////////////////////////////////

//sets-unique values
const s=new Set([1,3,4,2,5,3]);
s.add(6);//1 3 4 2 5 6
s.add("hello")//1 3 4 2 5 6 hello

length=0;
for( let el of s){
    length++;
}
console.log(length);//7

///////////////////////////////////////////////////////


//map-make a key value pair

var m1=new Map([[1,"one"],["fname","micke"],["whole number",[0,1,2,3]]])
console.log(m1.get(1));//1 is key whose value will get printed ie one

var k=m1.keys();
for( var key of k){
    console.log(key);//it will give all keys  
    
}
var m2=new Map();
m2.set("fname","mouse")//it will get inserted in map


///////////////////////////////////////////////////////////////////////////////////

//this-refer to the object of a function
//it can refer to window object if explicit obj is not made
var obj={
    fname:"john",
    age:8,
    fun:function(){
        console.log(this.fname);//john
        console.log(this);//all object elements
    }}
obj.fun();

console.log(this);//window object

 /////////////////////////////////////////////////////

 //new-it create instqnce  of an object 
 function fun(){
    let fname="jo";
    return this.fname//it will return undefined becoz in window obj we do not have fname
    this.fname=fname;//now here in fn call use new and assign this fname 
 }
console.log(new fun());

//constructor function-regular fun when they are name with capital letter first and they should be executed only with new operator

function User(name){
   this.name=name;}
var ob= new User("jack");
console.log(ob.name);


function User(name){
    if(!new.target){
        return new User(name); }
   this.name=name;}
 let ob= User("jack");
 console.log(ob.name);//jack

 /////////////////////////////////////////////

 //symbol-they are unique identifier every symbol is unique
 let sym=Symbol ("id");
 console.log(sym.toString());//Symbol(id)
 console.log(sym.description);//id

let id=Symbol("id");
 let obj={
    name:"john",
   // [id]:1
 }
  obj[id]=1;
 console.log(obj[id]);//1
 for(let i in obj){
    console.log(i);//only name will be printed id will not be printed
 }


 //////////////////////////////////////////////////////////////

 //Recursion
 function printnumber(n){
    if(n<=10){
        console.log(n);
    printnumber(n+1);
 }}
 printnumber(1);

 function fact(n){
    if(n==0) return 1;
    else{
        return fact(n-1)*n;
    }}
 fact(5);
 

 //Synchronous -Js is synchronous by default all things are executed in sequence and have to wait
 //but in asynchronous you dont have to wait  you can execute other task while 1 is in process 

 //setTimeOut-asynchronous function which make a timeout for certain time
setTimeout(fun(),1000);//it will wait for 1 sec
console.log("this");
function fun(){
    console.log("async");}
    console.log("is");  // this is . async
//or
console.log("this");
setTimeout(()=>{
    console.log("async");  
},3000)
console.log("is");  // this is ...async

setTimeout(fun(),0)//still async will be printed last only

//callback function--here function is calling another function passed as an argument
function fun1(val){
console.log(val);
}
function add(a,b,callback){
    let sum=a+b;
    callback(sum);
}
add(5,10,fun1)


//callback hell 
//Callback hell in JavaScript refers to a situation where multiple nested callback functions make the code difficult to read, debug, and maintain
//often know as pyramid of doom

function loadingdata(callback){
    setTimeout(()=>{
        console.log("loading...");
        callback();
    },4000)}

function collectiingdata( callback){
    setTimeout(()=>{
        console.log("COLLECTING..."); 
        callback();
    },5000)
}

function approvingdata( callback){
    setTimeout(()=>{
        console.log("approving..."); 
        callback();
    },2000)
}

function approved(){
    setTimeout(()=>{
        console.log("approved.."); 
    },1000)
}
//this is callbaack hell ....
loadingdaata( function(){
    collectingdata(function(){
        approvingdata(function(){
            approved();
        });
        });
});//loading,collecting,approving,approved


//////////////////////////////////////////////////////////////////

//promise-it is used to resolve callback hell
//promise -reject,fullfill,pending
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.
function fun(task){
    return new Promise((resolve,reject)=>{
            if(task){
                resolve("Completed");
            }
            else{
                reject("not completed");
            }
    })}
    let onResolve=(res)=>{
        console.log(res); }
    let onReject=(err)=>{
        console.log(rej);}
    fun(true).then(onResolve).catch(onReject);//Completed
    fun(false).then(onReject).catch(onResolve);//Not Completed


    //example of promose
function loadingdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("loading...");
            resolve();
        },4000)})
    }
   

function collectiingdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("COLLECTING..."); 
            resolve();
        },5000)
    })
   
}

function approvingdata(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("approving..."); 
        reject("not fullfilled");
    },2000)
    })
}

function approved(){
    setTimeout(()=>{
        console.log("approved.."); 
    },1000)
}

loadingdata().then(collectingdata).then(approvingdata).then(approved).catch((err)=>{
    conaole.log(err)
});//loading,collecting,approving,not fullfilled


//async await -better way to take promise
//The await keyword is used to wait for a promise to resolve. It can only be used within an async block.

function loadingdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("loading...");
            resolve();
        },4000)})
    }
   

function collectiingdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("COLLECTING..."); 
            resolve();
        },5000)
    })
   
}

function approvingdata(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("approving..."); 
        reject("not fullfilled");
    },2000)
    })
}

function approved(){
    setTimeout(()=>{
        console.log("approved.."); 
    },1000)
}

async function Ex(){//this ex function is a promise
    await loadingdata();
    await collectingdata();
    await approvingdata();
    await approved();
}//loading,collecting,approving,not fullfilled
Ex().catch((err)=>{
    console.log(err);
});


async function Ex(){//this ex function is a promise
    await loadingdata();
    await approvingdata();
    await approved();}
Ex().then(collectingdata).catch((err)=>{
    console.log(err);
});//so if there would be no errror then output would be  loading,approving,approved,collectingdata



///////////////////////////////////////////////////////////////////////////////////////

//setInternal-after partiular interval code  will get repeated
//clearinterval
let num=0;
setInterval(fun,1000);
function fun(){
    num++;
    console.log(num);//after every 1 sec we will see series of number 1,2,3,..
}

var inter=setInterval(fun2,1000);
function fun2(){
 let d=new Date().toLocaleTimeString();
 console.log(d);
}
setTimeout(()=>{
    clearInterval(inter);
},10000) // it will stop after 10 sec


//call , bind and apply

function fun(age,gender){
    console.log(this.fname,age,gender);
}
var obj1={
   fname:"john" 
}
var obj2={
    fname:"kenny" 
 }
fun().call(obj2,12);//kenny 12
fun().call(obj1,13,"male");//john 13 male

//in apply pass parameter in square bracktes
fun().apply(obj1,[13,"male"]);//john 13 male

//bind makes a var as function
var ay=fun().apply(obj1,[13,"male"]);//john 13 male
console.log(typeof a);//function


///////////////////////////////////////////////////////////////////////////////////////

//property,flags,descriptor
let emp={};
emp.name="John";
console.log(Object.getOwnPropertyDescriptor(emp,"name"));
