//document yazanda kodlar gelir

document.querySelector('.navbar') //hemin setri getirir
var logo = document.querySelector('.navbar')

logo.innerText='Educity'
logo.style.color='red'
logo.remove()

var headers=document.getElementsByTagName('h5') //headers->array
for(var i=0;i<headers.length;i++){
    headers[i].style.color='red'
}
