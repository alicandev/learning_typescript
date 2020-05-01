interface Todo {
    name: string;
    completed?: boolean;
}

interface ITodoService {
    add(todo: Todo): Todo;
    getById(todoId: number): Todo;
    getAll(): Todo[];
    delete(todoId: number): void;
}

let todo: Todo = { 
    name: 'Pick up dry cleaning'
}
