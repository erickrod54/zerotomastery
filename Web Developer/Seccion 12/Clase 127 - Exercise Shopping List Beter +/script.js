/*
1. If you click on the list item, it toggles the .done  class on and off.

2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds
the delete button next to it (hint: be sure to check if new items are clickable too!)
*/
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
const ul = document.querySelector("ul");
//cachea el elemento li por nombre tagName
const li = document.getElementsByTagName("li");
//un tagName 'i'? la verdad no se que es, pero se relaciona
//con el borrado al lado de cada eleento de la lista
const deleteButton = document.getElementsByTagName("i");
//variable para limpiar todos los elementos
var clearButton = document.getElementById("clear");

//la funcion que define la tarea hecha
function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function createDeleteButtonIcon() {
    for (var ind = 0; ind < li.length; ind++) {
        var createDeleteButton = document.createElement("i");
        var createDiv = document.getElementsByClassName("div");
        console.log(createDiv);
        createDeleteButton.classList.add("fa", "fa-trash");
        createDiv[ind].appendChild(createDeleteButton);
    }
}
//funcion para limpiar todo
function deleteNodeOnClick(e) {
    var trash = document.querySelectorAll("i");
    for (var ind = 0; ind < trash.length; ind++) {
        console.log(e);
        this.parentNode.parentNode.remove();
    }
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var divClassWrapper = document.createElement("div");
    divClassWrapper.classList.add("li-wrapper");

    var li = document.createElement("li");
    var createDiv = document.createElement("div");

    li.appendChild(document.createTextNode(input.value));
    divClassWrapper.appendChild(li);
    divClassWrapper.appendChild(createDiv);
    ul.appendChild(divClassWrapper);

    input.value = "";
    createDiv.classList.add("div");
    var createDeleteButton = document.createElement("i");
    createDeleteButton.classList.add("fa", "fa-trash");
    createDiv.appendChild(createDeleteButton);
    deleteParentNodeOnClick();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function deleteParentNodeOnClick() {
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteNodeOnClick);
    }
}

function clearList() {
    ul.innerHTML = "";
}

clearButton.addEventListener("click", clearList);
ul.addEventListener("click", strikeThrough);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
createDeleteButtonIcon();
deleteParentNodeOnClick();
