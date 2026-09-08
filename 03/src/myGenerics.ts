const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean|number): boolean | number | string {
    return val
}

function identityTwo(val: any):any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}

identityThree("3")

function identityFour<T>(val: T): T{
    return val
} //same as identityThree, doesnt have to be a T, can be any letter

interface Bottle{
    brand: string,
    type: number
}

const obj2 = identityFour<Bottle>({brand: "aaa", type: 3})

console.log(obj2.brand);
console.log(obj2.type);


function getSearchProducts<T>(products: T[]): T{
    //code
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    //code
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T,valTwo: U):object{
    return {
        valOne,
        valTwo
    }
}

//anotherFunction(3, "4")
let obj = anotherFunction(3, {connection: "aaa", username: "a", password:"aa"})
console.log(obj)

interface Quiz{
    name: string,
    type: string,
}

interface Course{
    name: string,
    author: string,
    subject: string,
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }

    get getCart(){
        return this.cart
    }
    getName(product: Course){
        return product.name;
    }
}

const product: Course = {name: "aa", author:"aaa", subject: "aaaa"};

const cart = new Sellable<Course | Quiz>()

cart.addToCart(product);

const arr: (Course | Quiz)[] = cart.getCart;

for (let en in arr){
    //console.log(arr[en].name + " " + arr[en].author + " " + arr[en].subject )
}

// this is just playing around