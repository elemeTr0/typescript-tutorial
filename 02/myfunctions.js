function addTwo(num) {
    return num + 2;
    //return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
let loginUser = (name, email, isPaid = false) => { };
//also a function with an empty body
let myValue = addTwo(5);
getUpper("mateo");
signUpUser("mateo", "mateo.boris@example.com", false);
loginUser("m", "mateo.boris@example.com");
// function getValue(myVal: number){
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }
const getHello = (s) => {
    return "";
};
const heroes = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3]
heroes.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
export {};
