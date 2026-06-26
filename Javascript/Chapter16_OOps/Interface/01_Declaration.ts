interface user{

    id:number
    name1:string
    status:string

}

let stu1:user={
id:10,
name1:"abc",
status:"Pass"

};





interface user2{

    readonly id:number   // cannot modify the value for varaible once assigned 
    name1:string
    status?:string   // question mark means option not mandatory to give 

}

let stu2:user2={
id:10,
name1:"abc",
};

console.log(stu2)


interface Person {
  readonly id: number
  name: string
}

const user: Person = {
  id: 101,
  name: "Ravi"
}

console.log(user.id)   // 101
user.name = "Raj"      // OK
//user.id = 102          // Error: Cannot assign to 'id' because it is a read-only property





interface user3{

    readonly id2:number   // cannot modify the value for varaible once assigned 
    readonly name2:string
}

