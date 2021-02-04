const normalPerosn = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 1500,
    getFullName: function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount){
        console.log(this)
        this.salary = this.salary - amount
        return this.salary
    }
}

// normalPerosn.chargeBill(150)
// normalPerosn.chargeBill(150)
// console.log(normalPerosn.salary)

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alom',
    salary: 30000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golom',
    salary: 30000
}

const heroChargeBill = normalPerosn.chargeBill.bind(heroPerson)
heroChargeBill(2000)
console.log(heroPerson.salary)

const friendlyChargeBill = normalPerosn.chargeBill.bind(friendlyPerson)
friendlyChargeBill(2500)
console.log(friendlyPerson.salary)