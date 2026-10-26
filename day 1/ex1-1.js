const grade = 88;
let remark = "";
let status = "";
if (grade >= 90) {
    remark = "outstanding";
    status = "passed ✅";
} else if (grade >= 85) {
    remark = "very satisfactory";
    status - "passed ✅"
} else if (grade >= 80) {
    remark = "good";
    status = "passed";
} else if (grade >= 75) {
    remark = ("not satisfied");
    status = ("passed")
}

console.log("Grade " + grade + ": " + remark);
console.log(status);
