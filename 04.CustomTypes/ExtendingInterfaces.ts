module ExtendingInterfaces {
    interface Todo {
        name: string;
        completed?: boolean;
    }

    interface jQueryElement {
        data (name: string): any;
        data (name: string, data: any): jQueryElement;
    }

    interface jQueryElement {
        todo(): Todo;
        todo(todo: Todo): jQueryElement;
    }

    interface jQuery {
        (selector: (string | any)): jQueryElement;
        fn : any;
        version : number;
    }

    let $ = <jQuery> function (selector) {
        // Find dom element.
    }
    
    $.fn.todo = function (todo? : Todo) : Todo {
        if (todo) {
            $(this).data('todo', todo);
        } else {
            return $(this).data('todo');
        }
    }

    let todo = <Todo> { name : "Pick up dry cleaning" };
    let container = $('#container');
    container.data('todo', todo);
    let savedTodo = container.data('todo');
    
    container.todo(todo);
}
