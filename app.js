var _a;
var CONTAINER = document.querySelector('.container');
// let todo = {
//     id: 123,
//     name: "Pick up dry cleaning",
//     completed: true
// }
// CONTAINER.innerHTML = `
//     <div todo='${ todo.id }' class="list-group-item}">
//         <i class="${ todo.completed ? "" : "hidden" } text-success glyphicon glyphicon-ok"></i>
//         <span class="name">${ todo.name }</span> 
//     </div>
// `
// let array = [ "Pick up dry-cleaning", "Clean Bat Cave", "Save Gotham" ];
// for (let value of array) { console.log(`${value}`) }
// arrow functions
function Counter(el) {
    var _this = this;
    this.count = 0;
    el.innerHtml = "<h1>" + this.count + "</h1>";
    el.addEventListener('click', function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}
new Counter(CONTAINER);
var filtered = [1, 2, 3].filter(function (x) { return x > 0; });
//destructuring
var array = [123, "Pick up dry cleaning.", false];
var id = array[0], title = array[1], completed = array[2];
console.log("ID:" + id);
var a = 1;
var b = 5;
_a = [b, a], a = _a[0], b = _a[1];
