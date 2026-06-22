class per{
#id
name
constructor(id,name)
{
    this.#id=id
    this.name=name
}

printdata()
{
    console.log("Id:",this.id)
    console.log("name:",this.name)
}


}

const cred= new per(12,"ABC")
cred.printdata()

console.log(cred.id)  //undefined
console.log(cred.#id)  //error