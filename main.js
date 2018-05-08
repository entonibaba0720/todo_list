function updateItemStatus() {
    var cbId = this.id.replace('cb_', '');
    var itemText = document.getElementById('item_' + cbId);

    if(this.checked) {
        itemText.className = 'checked';

    }else {
        itemText.className = '';
    }

};

function renameItem() {
    var newText = prompt('Átnevezés');

    if (!newText || newText == '' || newText == ' ') {
        return false;
    }
    this.innerText = newText;
}

/* MÉG ÁTDOLGOZÁSRA SZORUL!!!
function removeItem() {
    var spanId = this.id.replace('item_', '');
    document.getElementById('li_' + spanId).style.display='none';
}
*/

function addNewItem(list, itemText) {

    var date = new Date();
    var id = '' + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    var listItem = document.createElement('li');
    listItem.id = 'li_' + id;
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = 'cb_' + id;
    checkBox.onclick = updateItemStatus;

    var span = document.createElement('span');
    span.id = 'item_' + id;
    span.innerText = itemText;
    span.onclick = renameItem;
    span.ondblclick = removeItem;

    listItem.appendChild(checkBox);
    listItem.appendChild(span);



    list.appendChild(listItem);
};
    var totalItems = 0;
    var inItemText = document.getElementById('inItemText');
    inItemText.focus();

var btnNew = document.getElementById('add');
inItemText.onkeyup = function(event) {

    //event.which = 13 => Enter
    if (event.which == 13) {
         var itemText = inItemText.value;

    if (itemText == '' || itemText == ' ') {
        return false;
    }

    addNewItem(document.getElementById('todoList'), itemText);
    inItemText.focus();
    inItemText.select();
    }
};
