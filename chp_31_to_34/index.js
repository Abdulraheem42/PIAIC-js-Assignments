var userName = prompt("Enter your name");

var dobDate = prompt("Enter your Date of birth");
var dobMonth = prompt("Enter your Month of birth");
var dobYear = prompt("Enter your Year of birth");

var userDob = new Date(dobMonth + " " + dobDate + "," + dobYear);
console.log(userDob, "user dob")

var currentDate = new Date();
var currentHours = currentDate.getHours();

if(currentHours > 0 && currentHours < 12){
    alert(userName+ " " + "Good Morning!")
}
else if(currentHours == 12){
    alert(userName + " " + "Good Noon!");
}
else if(currentHours > 12 && currentHours < 17){
    alert(userName + " " + "Good Afternoon!");
}
else if(currentHours > 17 && currentHours < 24){
    alert(userName + " " + "Good Night");
}
else{
    alert("Good Evening");
}

var dob = new Date(dobMonth + " " + dobDate + "," + dobYear);

console.log("Your date fo birth is" + " = " + dob );
console.log("You are " + (currentDate.getFullYear() - dobYear) + " years " + (currentDate.getMonth() - userDob.getMonth()) + " Months " +
    (userDob.getDay() - currentDate.getDay()) + " Days " + (currentDate.getHours() - userDob.getHours() + " Hours " +
        (currentDate.getMinutes() - userDob.getMinutes() + " Minutes " + (currentDate.getSeconds() - userDob.getSeconds() + " Seconds old"))));

var myYears = (currentDate.getFullYear() - userDob.getFullYear());
// var myMonth = (currentDate.getMonth() - userDob.getMonth());
console.log("Your Age in Days : " + (myYears * 365));

if(currentDate.getDate() === userDob.getDate() && currentDate.getMonth() === userDob.getMonth()){
    console.log("Happy birthday Abdul Raheem today is your birthday ")
}
else{
    console.log("My next birthday time left : " + ((currentDate.getMonth() - userDob.getMonth()) - 12) * 30 + " Days " + (currentDate.getHours() - userDob.getHours() +
        " Hours " + (currentDate.getMinutes() - userDob.getMinutes() + " Minutes " + (currentDate.getSeconds() - userDob.getSeconds() + " Seconds "))));

}
