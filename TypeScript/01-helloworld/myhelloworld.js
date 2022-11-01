// ############# Variables #############
var found = true;
var grade = 88.6;
var firstname = "Hoa";
var lastName = "Nguyen";
console.log("found");
console.log(firstname + " " + lastName + " Grade is :" + grade);
// using template string, REMEMBER to use backticks
console.log("Hi ".concat(firstname));
// ############# For Loops #############
var total = 0;
var reviews = [5, 5, 4.5, 1, 3];
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
console.log("Averrage is " + total / reviews.length);
