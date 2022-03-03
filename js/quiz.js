/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let correct = 0;

//2. Store the rank of a player

let rank = "";

// 3. Select the <main> HTML element

const totalScore = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const q1 = prompt("What is the demon's name that kills the fire Hashira?");
if ( q1.toUpperCase() === 'AKAZA' ) {
  correct += 1;
} 
console.log(correct);
let q2 = prompt("What is Tanjiro's first trainer's name? (Proper spelling)");
if ( q2.toUpperCase() === 'UROKODAKI' ) {
  correct += 1;
}
console.log(correct);
let q3 = prompt("How many arms does Sasumaru (ball throwing demon) truly have?")
if ( q3 === `6`) {
  correct += 1;
}
console.log(correct);
let q4 = prompt("What color does Tanjiro's sword turn?");
if ( q4.toUpperCase() === 'BLACK' ) {
  correct += 1;
}
console.log(correct);
let q5 = prompt("This one's a toughie! What is Tanjiro's flame form really called? Good luck!");
if ( q5.toUpperCase() === 'HINOKAMI KAGURA' ) {
  correct += 1;
} 
console.log(correct);

/*5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if ( correct === 5 ) {
  rank = "Gold";
} else if ( correct >= 3 ) {
  rank = "Silver";
} else if ( correct >= 1 ) {
  rank = "Bronze";
} else {
  rank = "NONE! Go watch the series again and come back! OR read the Manga FOO!";
}

// 6. Output results to the <main> element
totalScore.innerHTML = `<h1> You got ${correct} out of 5 correct. </h1>;
<h2> You earned the ${rank} medal!</h2>`;
