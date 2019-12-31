var course1 = parseInt(prompt('Enter first course'));
var course2 = parseInt(prompt('Enter second course'));
var course3 = parseInt(prompt('Enter third course'));
var course4 = parseInt(prompt('Enter fourth course'));
var course5 = parseInt(prompt('Enter Fifth course'));

var totalObtainedMarks = course1 + course2 + course3 + course4 + course5;

var percentage = totalObtainedMarks/500 * 100;
alert(percentage);

switch (true){
    case (percentage >= 90 && percentage <= 100):
        alert("Grade A1");
        break;
    case (percentage >= 80 && percentage < 89):
        alert("Grade A+");
        break;
    case (percentage >= 70 && percentage < 78):
        alert("Grade A");
        break;
    case(percentage >= 60 && percentage < 69):
        alert("Grade B");
        break;
    case(percentage >= 50 && percentage < 59):
        alert("Grade C");
        break;
    case(percentage >= 40 && percentage < 49):
        alert("Promoted");
        break;
    default:
        alert("You are fail")
}
