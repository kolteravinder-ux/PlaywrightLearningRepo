// In Javascript /Typescript only Method Overriding is present
//For Compile Time polymorphisim is not allowed it happend in V8 Engine , Method Overloadig is not allowed.



class BaseTest{

setup(){
    console.log("base Test Page");
    
}

}

class AdminPage extends BaseTest{

setup(){
    console.log("Admin Test Page");
    
}


}


const test=new AdminPage()
test.setup()
