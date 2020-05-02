var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
function clone(value) {
    let serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}
clone("anan");
clone(123);
let todo = {
    id: 1,
    name: "Pick up dry cleaning",
    state: TodoState.Active
};
clone(todo);
clone({ name: 'Jess' });
