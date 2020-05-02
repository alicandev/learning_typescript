enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

interface Todo {
    id: number;
    name: string;
    state: TodoState;
}

function clone<T>(value: T): T {
    let serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}

clone("anan");

clone(123);

let todo: Todo = {
    id: 1,
    name: "Pick up dry cleaning",
    state: TodoState.Active
};

clone(todo);

clone({ name: 'Jess' })
