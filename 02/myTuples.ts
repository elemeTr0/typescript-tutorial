//const user: (string | number)[] = [1, "hc"]

let tUser: [string, number, boolean]

tUser = ["hc", 131, true] // this is a tuple
//tUser = [131, true, "hc"]  ==> this is NOT a tuple and throws an ERROR

let rgb: [number, number, number] = [255, 123, 112]


type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"

//newUser.push(true) ==> throws an error for me, for some reason on the video it's valid code




export{}