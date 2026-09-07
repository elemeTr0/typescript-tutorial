let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string;
    id: number
}
type Admin = {
    username: string;
    id: number
}

let mateo: User | Admin = {name: "mateo", id: 334}
mateo = {username:"mb", id:334}

// function getDbId(id:number | string){
//     console.log(`DB id is: ${id}`);
// }

getDbId(3)
getDbId("3")

// function getDbId(id:number | string){
//     id.toLowerCase();
// } id COULD be a number and typescript would fail, but typescript is strict so this is an error.

function getDbId(id:number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    }else{
        id = id + 2;
    }
    return id
} 


const data: number[] = [1,2,3,]
const data1: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
//seatAllotment = "crew"   ==> error !!