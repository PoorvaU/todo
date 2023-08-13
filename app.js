let addToDoBtn = document.getElementById('addToDo');
let todoList = document.getElementById('todoList');
let inputField = document.getElementById('inputField');

addToDoBtn.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todoList.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick',function(){
        todoList.removeChild(paragraph);
    })
})