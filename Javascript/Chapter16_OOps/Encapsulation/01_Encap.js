// Encapsulation is hiding methods or Variables from real world

class bank
{
#balance

constructor (balnce)
{
this.#balance=  balnce  
}

getBalance()
{
    return this.#balance
}

}

const acc=new bank(300)
const accbal=acc.getBalance()
console.log(accbal)

//console.log(acc.#balance) // it will give us error as balance variable is private