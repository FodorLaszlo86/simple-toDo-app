const todoList = document.querySelector('.todo-list');
const userInput = document.querySelector('.input__user');
const inputBtn = document.querySelector('.input__btn');
const col1 = document.querySelector('#color1');
const col2 = document.querySelector('#color2');
const body = document.querySelector('body');
const settingsBtn = document.querySelector('#settings');
const settingsBar = document.querySelector('.gradient__container');


/* ToDo App Controller */

function getInputLength() {
    return userInput.value.length
}

function createTodoNode() {
    // make new list item
    const newItem = `
        <li class="todo-list__item">
            <span class="todo-list__name">
                ${ userInput.value }
            </span>
            <ion-icon class="todo-list__delete" name="trash"></ion-icon>
        </li>
    `
    todoList.insertAdjacentHTML('beforeend', newItem);
    userInput.value = '';
}


function addNewItemOnClick() {
    if(getInputLength() > 0) {
        createTodoNode();
    }
}

function addNewItemEnterPress(e) {
    if(getInputLength() > 0 && e.keyCode === 13) {
        createTodoNode();
    }
}


function handleListItems(e) {
    // Toggle done-undone effect
    if(e.target && e.target.nodeName === 'SPAN' || e.target.nodeName === 'LI') {
        e.target.classList.toggle('done');
    }

    // On button click item to be removed from list
    else if( e.target && e.target.nodeName === 'ION-ICON') {
        const item = e.target.parentElement;
        item.parentNode.removeChild(item);
    }
}


todoList.addEventListener('click', handleListItems);
inputBtn.addEventListener('click', addNewItemOnClick);
userInput.addEventListener('keypress', addNewItemEnterPress);


/* Background Gradient Controller */


function setGradient() {
    body.style.backgroundImage = `linear-gradient(to right, ${ col1.value }, ${ col2.value })`;
}


/* Toggle Settings bar */

function toggleSettings() {
    settingsBar.classList.toggle('gradient__container--display');
    settingsBar.classList.add('animated', 'slideInRight');
}

settingsBtn.addEventListener('click', toggleSettings);

col1.addEventListener('input', setGradient);

col2.addEventListener('input', setGradient);