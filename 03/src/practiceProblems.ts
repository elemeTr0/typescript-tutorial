console.log("Exercise 1:")
type User = {
    name: string,
    age?: number,
    isAdmin: boolean
}

const user1 = {name:"a", isAdmin: true}
const user2 = {name:"b", isAdmin: false}
const user3 = {name:"c", isAdmin: true}

const arr: User[] = [user1,user2,user3]

for(let en in arr){
    if(arr[en].isAdmin) console.log(arr[en].name)
}

console.log("")
console.log("Exercise 2:")

interface Product {
    name: string
    price: number,
    quantity: number,
}
const prod1: Product = {name: "orange", price: 10, quantity: 5}
const prod2: Product = {name: "apple", price: 9, quantity: 9}
const prod3: Product = {name: "pear", price: 5, quantity: 6}

const array: Product[] = [prod1, prod2, prod3]

function pxq(array: Product[]){
    for(let en in array) {
        console.log(array[en].name + " => " + (array[en].price * array[en].quantity))
    }
}
pxq(array)

console.log("")
console.log("Exercise 3:")

function printId(id: string | number){
    if(typeof id === "string"){
        console.log("String ID: " + id)
    }else{
        console.log("Numeric ID: " + id)
    }
}

printId("abc123")
printId(123)
printId("aaa")


console.log("")
console.log("Exercise 4:")

function first<T>(array: T[]): T{
    return array[0]
}

console.log(first([1,2,3]))
console.log(first(["hello", "world"]))
console.log(first([true,false]))


// console.log("")
// console.log("Exercise 5:")

class Cart<T> {
    private items: T[] = []

    add(item: T){this.items.push(item)}
    remove(item:T){
        let index = this.items.indexOf(item)
        this.items.splice(index, 1);
    }
    getItems():T[]{
        return this.items;
    }
}

const Pcart = new Cart<Product>
const Ucart = new Cart<User>


// console.log("")
// console.log("Exercise 6:")

interface HasId{
    id: number
}

function findById<T extends HasId>(items: T[], id: number) : T | undefined {
    for(let en in items){
        if(items[en].id === id) return items[en]
    }
    return undefined
}

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Sarah" }
]

const products = [
    { id: 1, name: "Keyboard" },
    { id: 2, name: "Mouse" }
]

findById(products, 2)

// console.log("")
// console.log("Exercise 7:")

interface UserP {
    id: number,
    name: string,
    email: string
}

interface ApiResponse<T>{
    success: boolean,
    data: T,
    message: string
}
const user4: UserP = {id: 123, name: "mateo", email: "m@m.com"}
const user5: UserP = {id: 124, name: "m", email: "ma@t.org"}
const user6: UserP = {id: 125, name: "ma", email: "m5@p.net"}

const arrU: UserP[] = [user4, user5, user6]

const response: ApiResponse<UserP> = {success: true, data: user4, message: "success"}

const responseArr: ApiResponse<UserP[]> = {success:true, data:arrU, message:"failed"}

// console.log("")
// console.log("Exercise 8:")

interface task{
    id: number,
    title:string,
    complete: boolean
}

class TodoManager{
    private tasks: task[] = []

    addTodo(task: task){
        this.tasks.push(task)
    }
    removeTodo(task: task){
        let index = this.tasks.indexOf(task)
        this.tasks.splice(index,1)
    }
    completedTodo(task: task){
        task.complete = true
    }
    getCompletedTodos(){
        return this.tasks.filter(task => task.complete)
    }
    getPendingTodos(){
        return this.tasks.filter(task => !task.complete)
    }

}

