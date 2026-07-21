class basePage{
    open()
    {
        console.log("Base class Open method");
        
    }
}

class derived extends basePage
{
    close()
    {
        console.log("Derived class method");
        
    }
}


const d=new derived()
d.close();
d.open();