console.log("Exercise 1:");
const user1 = { name: "a", isAdmin: true };
const user2 = { name: "b", isAdmin: false };
const user3 = { name: "c", isAdmin: true };
const arr = [user1, user2, user3];
for (let en in arr) {
    if (arr[en].isAdmin)
        console.log(arr[en].name);
}
console.log("");
console.log("Exercise 2:");
const prod1 = { name: "orange", price: 10, quantity: 5 };
const prod2 = { name: "apple", price: 9, quantity: 9 };
const prod3 = { name: "pear", price: 5, quantity: 6 };
const array = [prod1, prod2, prod3];
function pxq(array) {
    for (let en in array) {
        console.log(array[en].name + " => " + (array[en].price * array[en].quantity));
    }
}
pxq(array);
console.log("");
console.log("Exercise 3:");
function printId(id) {
    if (typeof id === "string") {
        console.log("String ID: " + id);
    }
    else {
        console.log("Numeric ID: " + id);
    }
}
printId("abc123");
printId(123);
printId("aaa");
console.log("");
console.log("Exercise 4:");
function first(array) {
    return array[0];
}
console.log(first([1, 2, 3]));
console.log(first(["hello", "world"]));
console.log(first([true, false]));
// console.log("")
// console.log("Exercise 5:")
class Cart {
    items = [];
    add(item) { this.items.push(item); }
    remove(item) {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
    getItems() {
        return this.items;
    }
}
const Pcart = new Cart;
const Ucart = new Cart;
function findById(items, id) {
    for (let en in items) {
        if (items[en].id === id)
            return items[en];
    }
    return undefined;
}
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Sarah" }
];
const products = [
    { id: 1, name: "Keyboard" },
    { id: 2, name: "Mouse" }
];
findById(products, 2);
const user4 = { id: 123, name: "mateo", email: "m@m.com" };
const user5 = { id: 124, name: "m", email: "ma@t.org" };
const user6 = { id: 125, name: "ma", email: "m5@p.net" };
const arrU = [user4, user5, user6];
const response = { success: true, data: user4, message: "success" };
const responseArr = { success: true, data: arrU, message: "failed" };
class TodoManager {
    tasks = [];
    addTodo(task) {
        this.tasks.push(task);
    }
    removeTodo(task) {
        let index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }
    completedTodo(task) {
        task.complete = true;
    }
    getCompletedTodos() {
        return this.tasks.filter(task => task.complete);
    }
    getPendingTodos() {
        return this.tasks.filter(task => !task.complete);
    }
}
export {};
