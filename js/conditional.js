// function canIcome(wakeUpTime) {

//     let result;

//     if(wakeUpTime < 9) {
//         return result = "Come In";
//     }
//     return result = "Get Out";

// }
// console.log(canIcome(9));
// function canImprove(studyTime) {
//     let result;
//     if (studyTime > 8) {
//         return result = "You will improve in your furture";
//     }
//     if (studyTime == 8 ) {
//         return result = "You will improve in your future but you should try more"
//     } else {
//         return result = "You will lose your dreams"
//     }
// }
// console.log(canImprove(9));
// console.log(canImprove(8));
// console.log(canImprove(4));

function login(correctPassword) {
    let result;

    if(correctPassword === "mmm1234") {
        return result = "Successfully login"
    }
    else {
        return result = "Your password is wrong";
    }
}
console.log(login("mmm1234"));