let person1=prompt("Enter the age");
let person2=prompt("Enter the age");
let person3=prompt("Enter the age");

if(person1>person2&&person1>person3)
{
	console.log("person1 is elder");
}
else if(person2>person3&&person2>person1)
{
	console.log("person2 is elder");
}
else
{
	console.log("person3 is elder");
}