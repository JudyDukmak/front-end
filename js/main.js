/* let msg= "<h1>Hello</h1> "; 
alert(msg ); 
document.writeln(msg); 
document.getElementById("mycontaint").innerHTML = msg; 
console.log(msg); 
 
let elem =  document.getElementById("head"); 
alert (elem); 
document.writeln(elem); 
document.getElementById("judy").innerHTML = elem; 
console.log(elem) 
 
let x= 2; 
let y=64; 
let z= x *  y; 
document.getElementById("judy").innerHTML= z; 
 
let z= ""; 
 
for (i=0;i<1000 ; i++) 
{ 
z +=i + "<br>"; 
} 
document.getElementById("mycontaint").innerHTML += z; 
*/ 
let a=1; 
let b=1; 
let c=-2; 
 
let delta = (b**2)- 4* a*c;  
if (delta>0){ 
    let x1= (-b + Math.sqrt(delta))/2*a; 
    let x2= (-b - Math.sqrt(delta))/2*a; 
document.getElementById("mycontaint").innerHTML = x1 + "<br>"; 
document.getElementById("mycontaint").innerHTML +=x2 ; 
} 
else if(delta==0) 
{ x1=x2 = -b/2*a; 
document.getElementById("mycontaint").innerHTML = x1 ; 
} 
else  
{ document.getElementById("mycontaint").innerHTML =" no solution <br>";}