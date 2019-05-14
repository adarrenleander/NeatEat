var arr = [];

function clearIngredients() {
    arr = [];
}

function addIngredients() {
    var x, list;

    x = document.getElementById('ingredient');
    list = document.getElementById('ingredients-list');

    if (x.value != "") {
        list.innerHTML += '<li>' + x.value + '</li>';
    }

    arr.push(x.value);

    x.value = "";
}

function showIngredients() {
    var i, len, list;

    list = document.getElementById('ingredients-list');
    len = arr.length;

    for (i=0;i<len;i++) {
        list.innerHTML += '<li>' + arr[i] + '</li>';
    }
}