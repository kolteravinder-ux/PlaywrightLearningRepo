/*
You need to create a class with the static and non-static methods as well as variables. 
It will be a simple class of our Playwright 2x batch. You will be also printing out the students. 
Create 10 objects of students and print them. Also create a print method. 
*/


class student{
static classname="PlaywrightBatch2X"
static Instructor="PramodDutta"

constructor(StudentName,Age,Phonenum)
{
    this.StudentName=StudentName
    this.Age=Age
    this.Phonenum=Phonenum
}

printStudentData(){
    
    process.stdout.write(this.StudentName+" | ")
    process.stdout.write(this.Age+" | ")
    process.stdout.write(this.Phonenum+"")
}


}

const S1=new student("ABC",30,random10DidgitNum())
const S2=new student("BCD",32,random10DidgitNum())
const S3=new student("Rahul",30,random10DidgitNum())
const S4=new student("GHI",32,random10DidgitNum())
const S5=new student("oiuu",30,random10DidgitNum())
const S6=new student("jhsj",32,random10DidgitNum())
const S7=new student("edsa",30,random10DidgitNum())
const S8=new student("sdasa",32,random10DidgitNum())
const S9=new student("wqw",30,random10DidgitNum())
const S10=new student("qwsse",32,random10DidgitNum())

console.log("Class Name :",student.classname)
console.log("Class Instructor Name :",student.Instructor)
process.stdout.write("Student Name | Age       | PhoneNumber")
console.log();
S1.printStudentData()
console.log();
S2.printStudentData()
console.log();
S3.printStudentData()
console.log();
S4.printStudentData()
console.log();
S5.printStudentData()
console.log();
S6.printStudentData()
console.log();
S7.printStudentData()
console.log();
S8.printStudentData()
console.log();
S9.printStudentData()
console.log();
S10.printStudentData()
function random10DidgitNum()
{
    return Math.floor(1000000000 + Math.random() * 9000000000)

}