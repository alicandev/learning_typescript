var ExtendingInterfaces;
(function (ExtendingInterfaces) {
    let $ = function (selector) {
        // Find dom element.
    };
    $.fn.todo = function (todo) {
        if (todo) {
            $(this).data('todo', todo);
        }
        else {
            return $(this).data('todo');
        }
    };
    let todo = { name: "Pick up dry cleaning" };
    let container = $('#container');
    container.data('todo', todo);
    let savedTodo = container.data('todo');
    container.todo(todo);
})(ExtendingInterfaces || (ExtendingInterfaces = {}));
