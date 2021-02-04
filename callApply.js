const normalPerosn = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 1500,
    getFullName: function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount
        return this.salary
    }
}

normalPerosn.chargeBill(150)
normalPerosn.chargeBill(150)
console.log(normalPerosn.salary)