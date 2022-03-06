let element=document.getElementById("button")
element.addEventListener("click",display)
var b1=document.getElementById("box1")
var b2=document.getElementById("box2")
var b3=document.getElementById("box3")
var b4=document.getElementById("box4")
let randomnum="123456789"
let symb="!@#$%^&*()"
let small="abcdefghijklmnopqrstuvwxyz"
let capital="ABCDEFGHIZKLMNOPQRSTUVWXYZ"
var a=""
var b=""
var c=""
var d=""
let size=document.getElementById("box5")
function gen1(){
    for(let i=0;i<(size.value)/4;i++){
    a += symb[Math.floor(Math.random()*symb.length)] + randomnum[Math.floor(Math.random()*randomnum.length)] + small[Math.floor(Math.random()*small.length)] + capital[Math.floor(Math.random()*capital.length)] 
    }
    return a
}
function gen2(){
    for(let i=0;i<(size.value)/4;i++){
    b += symb[Math.floor(Math.random()*symb.length)] + randomnum[Math.floor(Math.random()*randomnum.length)] + small[Math.floor(Math.random()*small.length)] + capital[Math.floor(Math.random()*capital.length)] 
    }
    return b
}
function gen3(){
    for(let i=0;i<(size.value)/4;i++){
    c += symb[Math.floor(Math.random()*symb.length)] + randomnum[Math.floor(Math.random()*randomnum.length)] + small[Math.floor(Math.random()*small.length)] + capital[Math.floor(Math.random()*capital.length)] 
    }
    return c
}
function gen4(){
    for(let i=0;i<(size.value)/4;i++){
    d += symb[Math.floor(Math.random()*symb.length)] + randomnum[Math.floor(Math.random()*randomnum.length)] + small[Math.floor(Math.random()*small.length)] + capital[Math.floor(Math.random()*capital.length)] 
    }
    return d
}
function display(){
    if(size.value==""){
        size.placeholder="Enter a number!"
    }
    else if(size.value<4){
        alert("Length should be greater than or equal to 4")
    }
    else{
    if(size.value==""){
    b1.value=gen1()
b2.value=gen2()
b3.value=gen3()
b4.value=gen4()
}
else{
    b1.value=""
    a=""
    b2.value=""
    b=""
    b3.value=""
    c=""
    b4.value=""
    d=""
    b1.value=gen1()
    b2.value=gen2()
    b3.value=gen3()
    b4.value=gen4()
}
    }
}
