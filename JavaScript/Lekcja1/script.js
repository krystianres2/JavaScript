//        console.log("Hello!");
//        console.log("Word!");
//        // alert("toilet")
//        var x;
//        x = 5
//        console.log(x);
//        x = "Hello"
//        var y = "World"
//        conole.log(x, y)

// console.log("Hello World")
// var x="Hello ";
// var y="World"
// console.log(x + y)
// console.log("5" * 2)
// console.log(typeof(x))
// console.log(5==5)
// var z=11/2
// console.log(z>=5.5)

//document.getElementById("result").innerHTML="Hello World";

// var result = document.getElementById("result")

// var x = 5, y = 10;

// if (x < y) {
//     result.innerHTML = "Prawda"
// } else {
//     result.innerHTML = "Fałsz"
//     alert("Fałsz")
// }

// var box = document.getElementById("result");

// var color = "red";

// switch (color) {
//     case "red":
//         box.style.backgroundColor = "red";
//         box.style.color = "white";
//         break;
//     case "blue":
//         box.style.backgroundColor = "blue";
//         box.style.color = "white";
//         break;
//     default:
//         box.style.backgroundColor = "grey";
//         box.style.color = "white";
//         break;
// }

// var box=document.getElementById("result");
// var box2=document.getElementById("result2");

// var i=0;

// while(i<10){
//     box.innerHTML += i+"<br>"
//     i++;
// }

// for(var k=0; k<10;k++){
//     box2.innerHTML+=k+"<br>"
// }
// var result=document.getElementById("result");

// function hello(){
//     alert("Hello World!");
// }

// function add(a, b){
//     result.innerHTML +=a+" + "+b +" = "+(a+b)
// }
// add(2,3);
// hello();

// function add(a,b){
//     return  "Wynik = "+ a+b;
// }
// function test(a){
//     return a;
// }

// var sum=add(5,6);
// var a=test(add(1,2))
// result.innerHTML +=sum +"<br>";
// result.innerHTML +=a+"<br>";

// var tab=new Array("Poniedziałek", "Wtorek", "Środa");
// tab[4]="Piątek";
// //result.innerHTML+=tab[4]+"<br>";
// //result.innerHTML+=tab.length+"<br>";

// // for(var i=0;i<tab.length;i++){
// //     result.innerHTML+=tab[i]+"<br>";
// // }

// tab.forEach(x =>console.log(x))

// var tab2=new Array(3);
// var tab3=[1,2,3,4,5];
// var tab4=(tab.concat(tab2)).concat(tab3);


// var adam={name:"Adam", age:25, 
//     show(){
//         return "Imie: "+ this.name + ", wiek: "+this.age+"<br>";
//     }
// };
// console.log(adam);

// result.innerHTML+= adam.name;
// result.innerHTML+=" lat:"+adam['age']+"<br>";

// result.innerHTML+=adam.show();

// function Person(name, age){
//     this.name=name;
//     this.age=age;
//     this.show = function(){
//         return "Imie: "+ this.name + ", wiek: "+this.age+"<br>";
//     }
// }

// var bartek = new Person("Bartek", 19);
// console.log(bartek);
// result.innerHTML+=bartek.name+"<br>"

// var ola=new Person("Ola",22);

// result.innerHTML+=bartek.show();
var math =document.getElementById("math");
var date =document.getElementById("date");

var liczba=prompt("Podaj liczbę:","0");
math.innerHTML+="Liczba: "+liczba+"<br>";
math.innerHTML+="Abs: " +Math.abs(liczba) +"<br>";
math.innerHTML+="Round: " +Math.round(liczba) +"<br>";
math.innerHTML+="Ceil: " +Math.ceil(liczba) +"<br>";
math.innerHTML+="Floor: " +Math.floor(liczba) +"<br>";
math.innerHTML+="Power: " +Math.pow(liczba,3) +"<br>";
math.innerHTML+="Sqrt: " +Math.sqrt(liczba) +"<br>";


date.innerHTML+="Current: " + Date()+"<br>";

setInterval(setTime,1);

function setTime(){
    var time=new Date();
    date.innerHTML="Czas: "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()+":"+time.getMilliseconds();
}
