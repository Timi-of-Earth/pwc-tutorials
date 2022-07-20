// for(let i=2; i<21; i+=3) {
//     console.log(`number is ${i}`)
// }

// while loop
// let i = 0;
// while(i < 11) {
//     console.log(`number is ${i}`);
//     i++
// };

//if statements
// const x = 20;
// if(x == 20) {
//     console.log('x is 20')
// } else if(x== 10) {
//     console.log('x is 10')
// } else {
//     console.log('x is not 20 or 10')
// }

let score = 57;
switch(true) {
    case score >= 70: 
        console.log('Distinction');
        break;
    case (score >= 60):
        console.log('Good');
        break;
    case (score >= 50):
        console.log('Credit');
        break;
    case (score >= 40):
        console.log('Pass')
    case (score < '40'):
        console.log('Failed');
        break;

    default:
        console.log('You did not take the test')
}