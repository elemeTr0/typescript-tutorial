// const User = {
//     name: "mateo",
//     email: "m@mateo.com",
//     isActive: true
// }

// function createUser({name, isPaid}: {name:string, isPaid: boolean}){}

// let newUser = {name:"mateo", isPaid: false, email: "m@m.com"};

// createUser(newUser)



// function createCourse():{name: string, price: number}{
//     return{name: "reactjs", price: 399}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

//type Mystring = string //changes the keyword "string" to "Mystring"

// function createUser(user: User): User{
//     return {name:"", email:"", isActive:true};
// }

// createUser({name:"", email:"", isActive:true})


type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditcardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name:"h",
    email:"h@h.com",
    isActive: false,
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
} 

myUser.email = "h@gmail.com"
//myUser._id = "asa" //readonly




export{}