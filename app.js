//destructuring an object
function getTodo(id) {
    var todo = {
        id: 123,
        title: "Pick up the dry cleaning.",
        completed: false
    };
    return todo;
}
var _a = getTodo(123), id = _a.id, title = _a.title, completed = _a.completed;
