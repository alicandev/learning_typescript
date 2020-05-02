﻿module PrototypicalInheritance {
    function TodoService() {
        this.todos = [];
    }

    TodoService.prototype.getAll = function () {
        return this.todos;
    }

    // let todoService = new TodoService();
    // console.log(todoService.getAll());
}

module DefiningAClass {
    enum TodoState {
        New = 1,
        Active,
        Complete,
        Deleted
    }
    
    interface Todo {
        name: string;
        state: TodoState;
    }
    
    class TodoService {
        private static lastId: number = 0;
        
        private get nextId() {
            return TodoService.getNextId();
        }
        
        private set nextId(nextId) {
            TodoService.lastId = nextId - 1;
        }
        
        constructor(private todoList: Todo[]) { }
        
        add(todo: Todo) {
            let newId = TodoService.getNextId();
        }
        
        private getAll() {
            return this.todoList;
        }
        
        static getNextId() {
            return TodoService.lastId += 1;
        }
    }
}

module StaticProperties {
    function TodoService () {
        
    }
    
    TodoService.lastId = 0;
    
    TodoService.getNextId = function() {
        return TodoService.lastId + 1;
    }
    
    TodoService.prototype.add = function(todo) {
        let newId = TodoService.lastId += 1;
    }
}

module Accessors {
    interface Todo {
        name: string;
        state: TodoState;
    }
    
    enum TodoState {
        New = 1,
        Active,
        Complete,
        Deleted
    }
    
    let todo = {
        name: "Pick up dry cleaning.",
        get state() {
            return this._state;
        },
        set state(newState) {
            if(newState == TodoState.Complete) {
                let canBeCompleted = 
                    this.state == TodoState.Active 
                    || this.state == TodoState.Deleted;
                if(!canBeCompleted) {
                    throw "Todo must be Active or Deleted in order to be marked Complete.";
                }
            }
            this._state = newState;
        }
    }
    
    todo.state = TodoState.Complete;
    console.log(todo.state);
    
    module AbstractClasses {
        class SmartTodo {
            constructor(public name: string) {
            }
        }

        let smartTodo = new SmartTodo("Something something.");

        abstract class TodoStateChanger {
            constructor(protected newState: TodoState) { }

            changeState (todo: Todo): Todo {
                if (this.canChangeState(todo)) {
                    todo.state = this.newState;
                }
                return todo;
            }

            abstract canChangeState(todo: Todo): boolean;
        }

        class CompleteStateChanger extends TodoStateChanger {
            constructor() {
                super(TodoState.Complete);
            }

            canChangeState(todo: Todo) {
                return !!todo && (todo.state == TodoState.Active || todo.state == TodoState.Deleted);
            }
        }
    }
}

module ImplementingInterfaces {
    interface ITodoService {
        add(todo: Todo): Todo;
        delete(todoId: number): void;
        getAll(): Todo[];
        getById(todoId: number): Todo;
    }

    interface Todo {
        id: number;
        name: string;
        state: TodoState;
    }

    enum TodoState {
        New = 1,
        Active,
        Complete,
        Deleted
    }
    
    interface IIdGenerator {
        nextId: number;
    }

    class TodoService implements ITodoService, IIdGenerator {
        private static _lastId: number = 0;
        
        get nextId() {
            return TodoService._lastId += 1;
        }
        
        constructor(protected todos: Todo[]) {
        }
        
        add(todo: Todo): Todo {
            todo.id = this.nextId;
            this.todos.push(todo);
            return todo;
        }
        
        delete(todoId: number): void {
            let toDelete = this.getById(todoId);
            let deleteIndex = this.todos.indexOf(toDelete);
            this.todos.splice(deleteIndex, 1);
        }
        
        getById(todoId: number): Todo {
            let filtered = this.todos.filter(x => x.id == todoId);
            if(filtered.length) {
                return filtered[0];
            }
            return null;
        }
        
        getAll() : Todo[] {
            var clone = JSON.stringify(this.todos);
            return JSON.parse(clone);
        }
    }
}