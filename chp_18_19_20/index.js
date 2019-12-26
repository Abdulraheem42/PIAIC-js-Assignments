var courses = [];       //step 1

                        //step 2
for(var j=0; j<5; j++){
    var course = prompt("Enter your course name");
    courses.push(course);
}


alert(courses);         //step 3

                        //step 4
for(var i=0; i<courses.length; i++){
    courses[i] = prompt("Are you want edit Subject", courses[i]);
    courses.splice(courses[i], courses[i], )
}

                        //step 5
alert("Courses after Edit: " + courses);
