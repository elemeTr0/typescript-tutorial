class User {
    email;
    name;
    city = "Skopje";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const mateo = new User("m@m.com", "mateo");
export {};
