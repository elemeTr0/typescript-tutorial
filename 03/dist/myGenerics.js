const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("3");
function identityFour(val) {
    return val;
} //same as identityThree, doesnt have to be a T, can be any letter
const obj2 = identityFour({ brand: "aaa", type: 3 });
console.log(obj2.brand);
console.log(obj2.type);
function getSearchProducts(products) {
    //code
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //code
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
//anotherFunction(3, "4")
let obj = anotherFunction(3, { connection: "aaa", username: "a", password: "aa" });
console.log(obj);
class Sellable {
    cart = [];
    addToCart(product) {
        this.cart.push(product);
    }
    get getCart() {
        return this.cart;
    }
    getName(product) {
        return product.name;
    }
}
const product = { name: "aa", author: "aaa", subject: "aaaa" };
const cart = new Sellable();
cart.addToCart(product);
const arr = cart.getCart;
for (let en in arr) {
    //console.log(arr[en].name + " " + arr[en].author + " " + arr[en].subject )
}
export {};
// this is just playing around
