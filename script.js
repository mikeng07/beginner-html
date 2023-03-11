console.log("Hello world")

//variable
var age = 29;

//array
var names =["tung","tien","lana"];

//object
var House ={
    door : 10,
    table : 2,
}
console.log(House.table);
//loop
for (let i = 0; i<5;i++)
{
    console.log (i);
}
//print names
for (let i =0 ; i<3;i++)
{
    console.log(names[i]);
}



//conditions - statements
if(age <30)
{
console.log ("student")
console.log("going to school")
}
else
{
    console.log("professor")
}

//function
function Coffee_Maker (milk,coffee)
{
    return milk+coffee
}
console.log(Coffee_Maker(2,5))

//OOP - object oriented programming

class School
{
   constructor(student,professor)
   {
    this.student=student
    this.professor=professor
   } 

   number_of_student()
   {
    return this.student;
   }

   number_of_professor()
   {
    return this.professor;
   }

}

let Elcamino = new School(100,10);

console.log(Elcamino.number_of_student())
console.log(Elcamino.number_of_professor())

//Inheritance
class Class extends School
{
    constructor(student,professor,table)
    {
        super(student)
        super(professor)
        this.table = table
    }

}
