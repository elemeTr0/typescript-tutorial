class User {
    email: string
    name: string
    readonly city: string = "Skopje"

    constructor(email:string, name:string){
        this.email = email;
        this.name = name;
    }
}


const mateo = new User("m@m.com", "mateo")