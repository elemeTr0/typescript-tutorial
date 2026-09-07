"use strict";
let score = 33;
score = 44;
score = "55";
let mateo = { name: "mateo", id: 334 };
mateo = { username: "mb", id: 334 };
// function getDbId(id:number | string){
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
// function getDbId(id:number | string){
//     id.toLowerCase();
// } id COULD be a number and typescript would fail, but typescript is strict so this is an error.
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id = id + 2;
    }
    return id;
}
const data = [1, 2, 3,];
const data1 = ["1", "2", "3"];
const data3 = ["1", "2", 3, true];
let seatAllotment;
seatAllotment = "aisle";
//seatAllotment = "crew"   ==> error !!
