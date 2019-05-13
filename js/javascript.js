function addData() {
    var x, list;
    x = document.getElementById('ingredient');
    list = document.getElementById('ingredients-list');

    if (x.value != "") {
        list.innerHTML += '<li>' + x.value + '</li>';
    }

    x.value = "";
}