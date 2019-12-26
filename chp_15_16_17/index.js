var courses = [];       //step 1

                        //step 2
var course1 = prompt("Enter your First course name");
courses.push(course1);
var course2 = prompt("Enter your Second course name");
courses.push(course2);
var course3 = prompt("Enter your Third course name");
courses.push(course3);
var course4 = prompt("Enter your Fourth course name");
courses.push(course4);
var course5 = prompt("Enter your Fifth course name");
courses.push(course5);

alert(courses);         //step 3

                        //step 4 and 5
course1 = prompt("Are you want edit Subject", course1);
courses.splice(0, 1, course1);
course2 = prompt("Are you want edit Subject", course2);
courses.splice(1, 1, course2);
course3 = prompt("Are you want edit Subject", course3);
courses.splice(2, 1, course3);
course4 = prompt("Are you want edit Subject", course4);
courses.splice(3, 1, course4);
course5 = prompt("Are you want edit Subject", course5);
courses.splice(4, 1, course5);

                        //step 6
alert(courses);
