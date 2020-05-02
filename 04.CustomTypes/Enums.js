var ConstantValuesWithEnums;
(function (ConstantValuesWithEnums) {
    let TodoState;
    (function (TodoState) {
        TodoState[TodoState["New"] = 1] = "New";
        TodoState[TodoState["Active"] = 2] = "Active";
        TodoState[TodoState["Completed"] = 3] = "Completed";
        TodoState[TodoState["Deleted"] = 4] = "Deleted";
    })(TodoState || (TodoState = {}));
    let todo = {
        name: "Pick up dry cleaning",
        state: TodoState.Completed
    };
    function deleteTodo(todo) {
        if (todo.state != TodoState.Completed) {
            throw "Can't delete incomplete todo.";
        }
    }
})(ConstantValuesWithEnums || (ConstantValuesWithEnums = {}));
