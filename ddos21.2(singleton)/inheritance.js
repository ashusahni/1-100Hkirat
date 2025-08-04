
class User  {
constructor (name){
    this.name = name
}
logme(){
    console.log(`this reciepee is of ${this.name}`)
}
}

class Teacher extends User {
    constructor(name,email,password) {
        super (name)
        this.email = email
        this.password = password
    }

    addCourse () {
        console.log(`a new course was added by ${this.name}`)
    }
}

const inhert = new Teacher('inherit','adfdsf','any')
console.log(inhert.addCourse())

const chai = new User ('ashutosh')
chai.logme()

console.log(inhert instanceof User )