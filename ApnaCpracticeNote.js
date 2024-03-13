// #Introduction

// console.log("hi i am mahim");
// window.alert("I really love pizza")

// #Comments 

// hi i am mahim

/* this i s
 a multi line comment
 */

// #Varriebles

// let firstName = 'Mahim';
// let lastName= 'Rahad';
// let age = 18;
// //console.log("Hi Dear, My name Is "+ firstName +" " + lastName +" & i am "+age+" years old.");

// document.getElementById("p1").innerHTML = "Hi Dear, My name Is "+ firstName;
// document.getElementById("p2").innerHTML = "And my friends name "+ lastName;
// document.getElementById("p3").innerHTML = "& I am  "+ age;

// #Arthimatic Expression

// let age = 20;
// let fage = age+age;
// let mAge = age-15;
// let bAge = age+3;
// let gfAge =age*3;
// let dAge =age/4;
// let fAge = age%2;
// age+=2;
// console.log(age+" " +fage+" " +mAge+" " +bAge+" " +gfAge+" " +dAge+" " +fAge );

// let math = 1+2+4+(6/2)*9; // 1. parenthesis 2. exponent 3. multiplication & divission 4. addition and subtraction

// console.log(math);

// #User Input : 1. window prompt 

// let prompt = window.prompt("Whats your name")
// console.log(prompt);

//2.HTMl Textbox

// let username;
// document.getElementById("myButton").onclick = function() {

//     username =document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("mylebel").innerHTML = username;

//}

// #Type conversion

// let age = window.prompt("Whats your name : ");
// age = age+1;
// console.log(typeof age); 
// age =Number(age)
// console.log(typeof age);
//  console.log(age);


//  let str = String(true);
//  console.log(str);
//  console.log(typeof str); 

//  let num = Number(true);
//  console.log(num);
//  console.log(typeof num); 

//  let bool = Boolean(0);
//  console.log(bool);
//  console.log(typeof bool); 

// #Const = a varriable that can't be changed

//  const a = 3.1416;
//  //a=120;
//  console.log(a);

// #Math

// let x =3.1416;
// let y = 5;
// let z =9;
// let maximum = Math.max(x,y,z);
// let minimum = Math.min(x,y,z);

// //x= Math.round(x);
// //x = Math.floor(x)
// //x= Math.ceil(x);
// //x= Math.sqrt(x);
// //x = Math.abs(x);
// let iy= Math.PI;

// console.log(iy);

// #Random Number

//----------------------------------------------//
                    //#1-Varriable

// console.log("mahim")
// mahim= "myname"
// console.log(mahim)
//var= can be re declared and updated. A global scope variable.

// var a = 25;
// var a = 26;
// var a =27;
// console.log(a);

//let = variable cannot be re declared but can be updated.a block scope variable

// let a = 25;
// let a =26;
// a=27;

//const =variable cannot be re declared or updated.a block scope variable.

// const a= 25 ;
// console.log(a);

//block = {} separate code 

// {
//     let a = 25;
//     console.log(a);
// }

// {
//     let b =50;
//     console.log(b);
// }

// //Object
// const profile ={
//     name : "Mahim",
//     password : 12345678,
//     isfollow : false,
//     nomini : "Mother",

// };
// profile.isfollow =true;


// console.log(profile.name);
                       // ## For-of Loops

        // let name = "mahim"; //iterator
        // let size = 0;
        // for(let i of name) {
        //      console.log(i);
        //      size++;
        // }
        // console.log(size);
                            // ## For-in Loops


        // let sttudent = {
        //     name : "Mahim",
        //     roll : 113,
        //     section : 'b'

        // }
        // for (let i in sttudent) {
        //     console.log(sttudent[i]);
        // }

    // let usernum = prompt("Guess the number : ");
    // let gamenum = 25;

    // while (usernum!=gamenum) {
    //     usernum=prompt("Sorry! Try Again'")
    // }
    // console.log("Congrats");

    //alert("Hello!");

               //## String & Template Literals
     
   
    // console.log(string[0]);
    // console.log(string.length);
    // console.log(string.replace(string[0],string[1]));


                // Template literes

    // let string = "Mahim";
    // let string2 = "Rahad";
    // let Money = 50;
    // let sentence = `I am ${string} ${string2}.I have ${Money}.`
    // console.log(sentence);

                    //Arrays in JS

    // let mahim =["Mahim","Rahad","Sam"];
    // let mah=[1,2,3,4,5,6,7,8,9];
    // console.log(mahim[0]);
    
    // for (let i=0;i<=mahim.length;i++) {
    //     console.log(mahim[i]);
    // }
    // for (const i of mahim) {
    //     console.log(i);
    // }

    // mahim.unshift("MD");//: add to start
    // mahim.push("Mostasir");//add to end
    
   // mahim.shift();//: delete from start & return
    //mahim.pop();//delete from end & return
   
   // console.log(mahim.toString());//converts array to string
   //let m= mahim.concat(mah); //joins multiple arrays & returns result

   //let m=  mah.slice(1,6); //returns a piece of the array

    // let m = mah.splice(1,5,100,1000); //change original array (add, remove, replace)
    // for (const i of mah)
    // { console.log(i)}

                    // Function in Js

//  function mahimrahad() {
//     console.log("@MahimRahadSam");
//  }
 
//  function mahimrahad1(mahim,rahad) {
//     console.log(mahim,rahad);
//  }

//  mahimrahad1("Mahim","Rahad");

 //Arrow function [Compact way of writing a function]

    // const mahim = (a,b) =>{
    //     console.log("Hi I am",a,b);
    // }

    // mahim("Mahim","Rahad");

//for each loop

 //let mah=[1,2,3,4,5,6,7,8,9];

//  mah.forEach(
//     (i) => {
//         console.log(i);
//     }
//  )


//    let mah2= mah.map(
//         (i)=> {
//             return i+2;
//         }
//     )
//         console.log(mah2);

//    let m = mah.filter(
//         (i) =>
//         {
//             return i %2 ==0;
//         }
//     )
//     console.log(m);

    // let mah=[1,2,3,4,5,6,7,8,9];
    // let c =0;
    // let d = mah.reduce(
    //         (a,b)=> 
    //             a+b,c     
    //     )
    //     console.log(d);



                //Starter Code
        // <style> tag connects HTML with CSS
        // <script> tag connects HTML with JS

        //DOM Manipulation

//selecting  with id

//document.getElementById("name");

    // console.log(document.body);

    // console.log(document.getElementById("name"));
    // console.log(document.getElementsByClassName("bio"));
    // console.log(document.getElementsByTagName("h5"));
    // let name = document.querySelector(".bio");
    // console.log(name);
    // console.log(document.querySelector("#name"));
    // console.log(document.querySelector("h5"));


    // document.querySelector("div").children[0].innerHTML ="<div>AssalamuAlaikum</div>";
//     document.querySelector(".bio").setAttribute("background","blue");
//   let dc =  document.querySelector(".bio")
//     console.log(dc);


//  let div = document.querySelector(".bio");
//  div.style.color ="red";
//  div.style.backgroundColor ="blue";
//  div.style.visibility ="hidden";

    // let newBtn = document.createElement("ul");
    // newBtn.innerHTML ="<li>Mostasir</li> \n <li>Mahim</li>";
    // console.log(newBtn);
    // let newBtn1 = document.createElement("ul");
    // newBtn.innerHTML ="<li>Mostasir</li> \n <li>Mahim</li>";
    // console.log(newBtn);
    // document.querySelector("div").append(newBtn1);
    // document.querySelector("div").after(newBtn);
    // document.querySelector("#p").remove();
    //AppendChild and RemoveChild in MDN

    let G = document.querySelector("button");
    //.ondblclick = 
    // function() {
    //     alert("OMG!")
    //     console.log("Button was clicked!")}
    // document.querySelector("div").onmouseover =
    // () =>{
    //     console.log("moye moye");
    // }

        //event object : all you need for event
    // G.onclick = (e) => //event or evnt
    // {
    //     console.log("Button was clicked")
    //     alert("Omg!")
    // }
        //for using multiple event = add eventlistener

    //     let H =()=> {
    //         console.log("Button was clicked");
    //         alert("OMG..!")
    //     }
    // G.addEventListener("click",H )
    // G.removeEventListener ("click", H)


    //Classes and Object

// DirectObject

    // let mahim = {
    //     name : "Mostasir",
    //     age : 21,
    //     salary : 10.00,
    //     printgurdian : ()=>{
    //         console.log("Father Name : Abdul Matin");
    //         console.log("Mother Name : Shahanaz PArvin");
    //     }
    // }

    
//Prototypes .__proto__
// let rahad = {

// }
// rahad.__proto__ =mahim;
//same method hole object inside mehod work kore.

//             //Classes in Js (BluePrint)

//  class student {
//     name() {
//         console.log("Mahim");
//     }
//     age() {
//         console.log(21);
//     }
//     printGurdiam() {
//         console.log("Abdul Matin\nShahanaz Parvin");
//     }
//  }
// //Creating object through Classes
//  let Mostasir =new student();
//  console.log(Mostasir.printGurdiam());
 
//  //Constructor : a special kind of Method;








