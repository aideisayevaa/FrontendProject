/* var todoList = document.getElementById('todoList')

todoList.style.listStyleType='none' */


/* var todoitems = document.getElementsByClassName('todoitem')

for(var i=0; i<todoitems.length;i++){
    todoitems[i].style.textDecoration='line-through'
} */

var date = new Date()
var hour = date.getHours()
var element;

for(var i=hour; i>=8;i--){
    element=document.getElementsById('item_'+i)
    element.style.textDecoration='line-through'
    element.querySelector('input').checked=true
}