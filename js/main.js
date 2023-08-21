const formInput = document.getElementById('form-input');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');




function onSubmitForm(e) {
    e.preventDefault();

    const newItem = itemInput.value;
    const li = document.createElement('li');

    const button = createButton('remove-item btn-item');
    console.log(button);

    if (newItem === '') {
        alert('Please add an Item')
    } else {
        li.appendChild(document.createTextNode(newItem));
    }

    itemList.appendChild(li);
    li.appendChild(button)
    itemInput.value = '';
}

// create btn
function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon)
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

// remove item
function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove()
        }
    }
}

function removeAllItems() {
    itemList.innerHTML = '';
}

function init() {
    formInput.addEventListener('submit', onSubmitForm);
    itemList.addEventListener('click', removeItem);
    clearBtn.addEventListener('click', removeAllItems);
}

init();
