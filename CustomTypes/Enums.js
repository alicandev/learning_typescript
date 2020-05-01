var ConstantValuesWithEnums;
(function (ConstantValuesWithEnums) {
    var todo = {
        name: "Pick up dry cleaning",
        state: 1
    };
    let TodoState;
    (function (TodoState) {
        TodoState[TodoState["New"] = 1] = "New";
        TodoState[TodoState["Active"] = 2] = "Active";
        TodoState[TodoState["Completed"] = 3] = "Completed";
        TodoState[TodoState["Deleted"] = 4] = "Deleted";
    })(TodoState || (TodoState = {}));
})(ConstantValuesWithEnums || (ConstantValuesWithEnums = {}));
