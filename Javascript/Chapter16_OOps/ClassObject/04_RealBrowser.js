class TestCase{

constructor(name, status, priority){
    this.name=name
    this.status=status
    this.priority=priority

}

display()
{
    console.log(this.name,"->",this.status,"->",this.priority)
}


}
const Login= new TestCase("Login Test", 'Pass','P0')
const Signup= new TestCase("Sign UpTest", 'Pass','P1')

