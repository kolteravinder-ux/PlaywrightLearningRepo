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
    console.log("Student Name:",this.StudentName)
    console.log("Student Age:",this.Age)
    console.log("Student Phone Number:",this.Phonenum)
}


}

const S1=new student("ABC",30,"98765342")
const S2=new student("BCD",32,"987298363")

console.log(student.classname)
console.log(student.Instructor)

S1.printStudentData()
S2.printStudentData()
