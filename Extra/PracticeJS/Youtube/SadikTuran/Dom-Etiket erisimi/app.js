// document.getElementsById('blue')
// document.getElementsByTagName('div')
// document.getElementsByClassName('box')
// document.querySelector('#blue') //idsi blue olan ilk element
// document.querySelector('.box')
// document.querySelectorAll('.box')


var isBlue=false;
var blue=document.getElementById('blue')
setInterval(function(){
    if(isBlue){
        blue.style.background='red'
        isBlue=false
    }
    else{
        blue.style.background='blue'
        isBlue=true
    }
}, 1000);