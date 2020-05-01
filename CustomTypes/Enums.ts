module ConstantValuesWithEnums {
    enum TodoState {
        New = 1,
        Active,
        Completed,
        Deleted
    }

    interface Todo {
        name: string;
        state?: TodoState;
    }
    
    let todo: Todo = {
        name: "Pick up dry cleaning",
        state: TodoState.Completed
    }
    
    function deleteTodo(todo: Todo) {
        if (todo.state != TodoState.Completed) {
            throw "Can't delete incomplete todo.";
        }
    }
}