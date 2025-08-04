

class User {
    constructor (username,email,password) {
        this.username =username
        this.email =email
        this.password=password

    }
    encryptPassword(){
        return `${this.password}ashutosh`
    }
    capName(){
        return `${this.username.toUpperCase()}`
    }
}

const ashu = new User ("ashutosh","ashutos@gmail.com","flame")
console.log(ashu.encryptPassword())
console.log(ashu.capName())