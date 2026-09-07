interface User {
    readonly dbId: number
    email: string,
    userId: number
    googleId?: string

    //startTrial: () => string
    startTrial(): string //does the same just a different syntax
    getCoupon(couponname: string, value:number): number

}

interface User {
    githubToken: string
}

interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const mateo : Admin = {dbId: 222, email: "m@m.com", userId: 2211, githubToken: "github",
    role: "learner",
    startTrial: () => {return "trial started"},
    getCoupon: (name: "mateo10", off:10) => { return off }
}

mateo.email = "m@google.com"

