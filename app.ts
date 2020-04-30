const CONTAINER = document.querySelector('.container');

// let todo = {
//     id: 123,
//     name: "Pick up dry cleaning",
//     completed: true
// }

// CONTAINER.innerHTML = `
//     <div todo='${ todo.id }' class="list-group-item}">
//         <i class="${ todo.completed ? "" : "hidden" } text-success glyphicon glyphicon-ok"></i>
//         <span class="name">${ todo.name }</span> 
//     </div>
// `

// let array = [ "Pick up dry-cleaning", "Clean Bat Cave", "Save Gotham" ];
// for (let value of array) { console.log(`${value}`) }

// arrow functions
function Counter(el) {
    this.count = 0;
    
    el.innerHtml = `<h1>${ this.count }</h1>`;
    
    el.addEventListener('click',
        () => {
            this.count += 1;
            el.innerHTML = this.count;
        });
}

new Counter(CONTAINER);

let filtered = [1, 2, 3].filter(x => x > 0);

//destructuring
let array = [123, "Pick up dry cleaning.", false];
let [id, title, completed] = array;
console.log(`ID:${id}`);

let a = 1;
let b = 5;

[a,b] = [b,a];
