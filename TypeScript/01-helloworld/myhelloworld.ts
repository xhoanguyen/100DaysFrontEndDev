// ############# Variables #############

let found: boolean = true;
let grade: number = 88.6;
let firstname: string = "Hoa";
let lastName: string = "Nguyen";

console.log("found");
console.log(firstname + " " + lastName + " Grade is :" + grade);

// using template string, REMEMBER to use backticks
console.log(`Hi ${firstname}`);

// ############# For Loops #############

let total: number = 0;
let reviews: number[] = [5, 5, 4.5, 1, 3];
for (let i = 0; i < reviews.length; i++) {
  total += reviews[i];
}

console.log("Averrage is " + total / reviews.length);
