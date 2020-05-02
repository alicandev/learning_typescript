var PrototypicalInheritance;
(function (PrototypicalInheritance) {
    function TodoService() {
        this.todos = [];
    }
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    // let todoService = new TodoService();
    // console.log(todoService.getAll());
})(PrototypicalInheritance || (PrototypicalInheritance = {}));
var DefiningAClass;
(function (DefiningAClass) {
    let TodoState;
    (function (TodoState) {
        TodoState[TodoState["New"] = 1] = "New";
        TodoState[TodoState["Active"] = 2] = "Active";
        TodoState[TodoState["Complete"] = 3] = "Complete";
        TodoState[TodoState["Deleted"] = 4] = "Deleted";
    })(TodoState || (TodoState = {}));
    class TodoService {
        constructor(todoList) {
            this.todoList = todoList;
        }
        get nextId() {
            return TodoService.getNextId();
        }
        set nextId(nextId) {
            TodoService.lastId = nextId - 1;
        }
        add(todo) {
            let newId = TodoService.getNextId();
        }
        getAll() {
            return this.todoList;
        }
        static getNextId() {
            return TodoService.lastId += 1;
        }
    }
    TodoService.lastId = 0;
})(DefiningAClass || (DefiningAClass = {}));
var StaticProperties;
(function (StaticProperties) {
    function TodoService() {
    }
    TodoService.lastId = 0;
    TodoService.getNextId = function () {
        return TodoService.lastId + 1;
    };
    TodoService.prototype.add = function (todo) {
        let newId = TodoService.lastId += 1;
    };
})(StaticProperties || (StaticProperties = {}));
var Accessors;
(function (Accessors) {
    let TodoState;
    (function (TodoState) {
        TodoState[TodoState["New"] = 1] = "New";
        TodoState[TodoState["Active"] = 2] = "Active";
        TodoState[TodoState["Complete"] = 3] = "Complete";
        TodoState[TodoState["Deleted"] = 4] = "Deleted";
    })(TodoState || (TodoState = {}));
    let todo = {
        name: "Pick up dry cleaning.",
        get state() {
            return this._state;
        },
        set state(newState) {
            if (newState == TodoState.Complete) {
                let canBeCompleted = this.state == TodoState.Active
                    || this.state == TodoState.Deleted;
                if (!canBeCompleted) {
                    throw "Todo must be Active or Deleted in order to be marked Complete.";
                }
            }
            this._state = newState;
        }
    };
    todo.state = TodoState.Complete;
    console.log(todo.state);
    let AbstractClasses;
    (function (AbstractClasses) {
        class SmartTodo {
            constructor(name) {
                this.name = name;
            }
        }
        let smartTodo = new SmartTodo("Something something.");
        class TodoStateChanger {
            constructor(newState) {
                this.newState = newState;
            }
            changeState(todo) {
                if (this.canChangeState(todo)) {
                    todo.state = this.newState;
                }
                return todo;
            }
        }
        class CompleteStateChanger extends TodoStateChanger {
            constructor() {
                super(TodoState.Complete);
            }
            canChangeState(todo) {
                return !!todo && (todo.state == TodoState.Active || todo.state == TodoState.Deleted);
            }
        }
    })(AbstractClasses || (AbstractClasses = {}));
})(Accessors || (Accessors = {}));
var ImplementingInterfaces;
(function (ImplementingInterfaces) {
    let TodoState;
    (function (TodoState) {
        TodoState[TodoState["New"] = 1] = "New";
        TodoState[TodoState["Active"] = 2] = "Active";
        TodoState[TodoState["Complete"] = 3] = "Complete";
        TodoState[TodoState["Deleted"] = 4] = "Deleted";
    })(TodoState || (TodoState = {}));
    class TodoService {
        constructor(todos) {
            this.todos = todos;
        }
        get nextId() {
            return TodoService._lastId += 1;
        }
        add(todo) {
            todo.id = this.nextId;
            this.todos.push(todo);
            return todo;
        }
        delete(todoId) {
            let toDelete = this.getById(todoId);
            let deleteIndex = this.todos.indexOf(toDelete);
            this.todos.splice(deleteIndex, 1);
        }
        getById(todoId) {
            let filtered = this.todos.filter(x => x.id == todoId);
            if (filtered.length) {
                return filtered[0];
            }
            return null;
        }
        getAll() {
            var clone = JSON.stringify(this.todos);
            return JSON.parse(clone);
        }
    }
    TodoService._lastId = 0;
})(ImplementingInterfaces || (ImplementingInterfaces = {}));
