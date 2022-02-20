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

const game = {
  timer: 3,
  start() {
    const gameTimer = setInterval(() => {
      if (game.timer === 0) {
        console.log('game over');
        clearInterval(gameTimer);
      } else {
        console.log('hi', this);
        game.timer -= 1;
      }
    }, 1000);
  },
};
