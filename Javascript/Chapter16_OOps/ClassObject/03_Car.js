
class Car{

constructor(name_given_during_obj_creation)
{
    this.name= name_given_during_obj_creation
}

drive()
{
    console.log("We are driving:",this.name)
}

}

const tesla= new Car("Model S")
tesla.drive()
