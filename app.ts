//destructuring an object
function getTodo(id) {
    let todo = {
        id: 123,
        title: "Pick up the dry cleaning.",
        completed: false
    }
    
    return todo;
}

let { id, title, completed:isCompleted } = getTodo(123);
