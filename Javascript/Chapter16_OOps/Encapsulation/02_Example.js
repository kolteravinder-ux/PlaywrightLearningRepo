class person
{
    #child1
    #child2
constructor(name,ch1,ch2)
{
    this.name=name
    this.#child1=ch1
    this.#child2=ch2
}

getChild1()
{
    return this.#child1
}

setChild1(ChangedchildName)
{
this.#child1=ChangedchildName
}

}

const p=new person('Ravi','Rutvik','Radha')

console.log(p.name)

p.setChild1('Rahul')
console.log(p.getChild1())