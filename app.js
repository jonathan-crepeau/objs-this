// console.log('Fear is the mind killer.');


// SECTION Object Review:

// 1. Print the following:

    // 'hooteroll'
    // 'Bobby weir'
    // 'writing poems'
    // 'banjo'

// 2. Edit the following properties:

    // change the alive property to true using dot notation with the object
    // change the quote property to 'Everybody just be nice to each other' using bracket notation
    // Add a method

    // add a method to the garcia object named speak that logs out "Heyy, Thats a good song!"
    // add a method to the garcia object named letsPlay that logs out "La daaa da da, La daa, da, da"

  // const garcia = {
  //   albums: [
  //     "shady grove",
  //     "run for the roses",
  //     "hooteroll",
  //     "Garcia",
  //     "Reflections",
  //   ],
  //   instruments: [
  //     "Vocals",
  //     "pedal steel",
  //     "electric guitar",
  //     "acoustic guitar",
  //     "banjo",
  //   ],
  //   alive: false,
  //   quote: "Im shopping around for something to do that no one will like",
  //   friends: [
  //     {
  //       name: "Bobby weir",
  //       hobby: "guitar",
  //     },
  //     {
  //       name: "Bob Dylan",
  //       hobby: "writing songs",
  //     },
  //     {
  //       name: "Allen Ginsberg",
  //       hobby: "writing poems",
  //     },
  //     {
  //       name: "Phil Lesh",
  //       hobby: "Playing dope bass lines",
  //     },
  //   ],
  // };


// SECTION this Keyword

// const foo = {
//   value: 12,
//   getValue() {
//     return this.value;
//   },
// };

// 1. console.log 'this' inside the getValue function:

// const foo = {
//   value: 12,
//   getValue() {
//     console.log('Define ' + this);
//     return this.value;
//   },
// };

// 2. Create an object called person that has a property called name and a method called getName that when called returns the value of the name property.

const person = {
  name: 'Jonathan',
  getName() {
    return this.name;
  },
}


// SECTION More 'this'

// In JS, everything belongs to an object.
// We use 'this' to tell us what object we are currently in.
// This is called CONTEXT, not to be confused with scope.

const taco = () => {
  console.log(this, ' this is with arrow functions!');
}

// this is referring to the Window object.


// SECTION - Let's Play With Intervals

// const game = {
//   start() {
//     const gameTimer = setInterval( () => {
//       console.log('hi', this)
//     }, 1000);
//   }
// }

// 1. Add a property to the 'game' object called timer and set the value equal to 10.

// const game = {
//   timer: 10,
//   start() {
//     const gameTimer = setInterval( () => {
//       console.log('hi', this)
//     }, 1000);
//   }
// }

// 2. edit the start method to decrease the value of 'time' every second by the value of 1.

// const game = {
//   timer: 10,
//   start() {
//     const gameTimer = setInterval( () => {
//       console.log('hi', this);
//       game.timer -= 1;
//     }, 1000);
//   }
// }

// 3. Add a conditional inside of the 'setInterval' that checks to see if teh value has reached 0. If yes, console log 'game over' and clear the interval:

// const game = {
//   timer: 3,
//   start() {
//     const gameTimer = setInterval(() => {
//       if (game.timer === 0) {
//         console.log('game over');
//         clearInterval(gameTimer);
//       } else {
//         console.log('hi', this);
//         game.timer -= 1;
//       }
//     }, 1000);
//   },
// };

// NOTE -- if using the clearInterval method, you MUST include it in a block statement (in the example above, we have it in the block statement for the conditional 'if' statement). When I re-wrote this to have no block statement brackets with the conditional if/else statement, clearInterval() would fire the 1st time through the setInterval() method ... even if the conditional if statement was not met.

// SECTION - Player Object Activity

// 1. Create a player object
// 2. Add properties of score, name, and lives.
// 3. Make the score a value of ten.
// 4. use prompt to get the users name in the name property.
// 5. set the lives property equal to 3.
// 6. Add a method that increases the persons score.
// 7. Add a method that will either decrease or increase the lives depending on an argument you pass that method.
// 8. Access all the properties using dot notation, and bracket notation.

// const player = {
//   score: 10,
//   name() {
//     player.name = prompt('Please enter your name:');
//   },
//   lives: 3,
//   increaseScore() {
//     player.score += 1;
//   },
//   livesChange(input) {
//     if (input === 'increase')
//       player.lives += 1;
//     if (input === 'decrease')
//       player.lives -= 1;
//   }
// }


// SECTION - for in loops

// const jonathan = {
//   givenName: 'Jonathan',
//   height: '6\'2"',
//   hairColor: 'ginger',
//   eyeColor: 'brown',
// }

// const family = [
//   'Jonathan',
//   'Luna',
//   'Jeremy',
// ]

// NOTE Activy #1

// const movie = { title: "Eraserhead", director: "David Lynch", year: 1978 };

// * Use a **for..in** loop to print all the keys of the movie object

// for (const key in movie) {
//   console.log(key);
// }

// * Use a **for..in** loop to print all the values of the movie object

// for (const key in movie) {
//   console.log(movie[key]);
// }

// NOTE Activity #2

const movies = [
  { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
  { title: "Eraserhead", director: "David Lynch", year: 1978 },
  { title: "Dayereh", director: "Jafar Panahi", year: 2000 },
  { title: "Dayereh", director: "Jafar Panahi", year: 2000 },
];

// 1. * Create an empty object. Leverage the fact that Keys are unique in an object. Loop over the movies array and add the movie titles as keys in the object. This will consequently omit the duplicate movie. At the same time, give each a value of **0** in the object.
// 2. * The result should be this: `{"L'Avventura": 0, "Eraserhead": 0, "Dayereh": 0}`

const emptyObject = {};

for (let a = 0; a < movies.length; a++) {
  // console.log('title: ' + movies[a].title);
  emptyObject[movies[a].title] = 0;
}

// 3. * Use **Object.keys** loop to print all the values of the movies object.

let keys = Object.keys(movies);

for (let b = 0; b < Object.keys(movies).length; b++) {
  console.log(movies[keys[b]]);
}
