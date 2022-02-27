// console.log('Fear is the mind killer.')

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

  const foo = {
    value: 12,
    getValue() {
      console.log(this);
      return this.value;
    }
  }

  const person = {
    name: 'Jonathan',
    getName() {
      return this.name;
    }
  }

const taco = () => {
  console.log(this);
}

function welcomeUser() {
  alert('Welcome Back!!');
}

// NOTE - https://www.freecodecamp.org/news/arrow-function-javascript-tutorial-how-to-declare-a-js-function-with-the-new-es6-syntax/

// const game = {
//   start() {
//     const gameTimer = setInterval( () => {
//       console.log('hi', this);
//     }, 1000);
//   }
// }

// 1. add a property to the game object called timer and set the value equal to 10.

// const game = {
//   timer: 10,
//   start() {
//     const gameTimer = setInterval(() => {
//       console.log("hi", this);
//     }, 1000);
//   },
// };

// 2. edit the start method to decrease the value of time every second by the value of 1.

// const game = {
//   timer: 10,
//   start() {
//     const gameTimer = setInterval(() => {
//       console.log("hi", this);
//       game.timer -= 1;
//     }, 1000);
//   },
// };

// 3. add a conditional inside of the setInterval that checks to see if the value has reached 0, if it has console.log the "gameover". Then clear the interval. Hint: "look up how do I stop an interval or 'clear!' an interval".

// const game = {
//   timer: 10,
//   start() {
//     const gameTimer = setInterval(() => {
//       if (game.timer == 0) {
//         console.log('gameover');
//         clearInterval(gameTimer);
//       } else {
//         console.log('hi', this);
//         game.timer -= 1;
//       }
//     }, 1000);
//   },
// };


// const player = {
//   score: 10,
//   name: prompt('What is your name?'),
//   lives: 3,
//   increaseScore() { player.score += 1},
//   changeLives(input) {
//     if (input == 'up') {
//       player.lives += 1;
//     } else if (input == 'down') {
//       player.lives -= 1;
//     }
//   }
// }

// const movie = {
//   title: "L'Avventura",
//   director: "Michelangelo Antonioni",
//   year: 1960,
// };

// 1. Write a JavaScript program to list the properties of a JavaScript object.

// const checkObjKeys = (obj) => {
//   console.log(Object.keys(obj));
// }

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property

// function deleteRollno(obj) {
//   console.log(obj);
//   if (obj.rollno) {
//     delete obj.rollno;
//   }
//   console.log(obj);
// }

 // 3. Write a JavaScript program to get the length of a JavaScript object.

//  function objectLength(obj) {
//    console.log(Object.keys(obj).length);
//  }