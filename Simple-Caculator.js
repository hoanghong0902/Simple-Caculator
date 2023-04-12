let view = document.getElementById('view');
function inputValue(value){
    view.value += value;
}
function Result() {
    let result = eval(view.value);
    view.value = result;
}
function Delete() {
    view.value="";
}