function squaresOfMax(a, b, c) {
  // Write a function that takes three numbers and returns
  // sum of squares of two largest
  if (a > b && c > b) {
    return (a*a + c*c);
  } else if (a > c) {
    return (a*a + b*b);
  } else {
    return (b*b + c*c);
  }
}

function drawTriangle() {
  // Write a loop that makes seven calls to console.log to output the following triangle:
  //
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  for (i = 1; i <= 7; i++) {
    console.log(Array(i + 1).join("#"));
  }
}

function fizzBuzz() {
  // Write a program that uses console.log to print all the numbers from 1 to 100,
  // with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
  // and for numbers divisible by 5 (and not 3), print "Buzz" instead.
  //
  // When you have that working, modify your program to print "FizzBuzz",
  // for numbers that are divisible by both 3 and 5 (and still print "Fizz"
  // or "Buzz" for numbers divisible by only one of those).

  for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0 ) {
        console.log ('FizzBuzz');
    } else if (i % 5 == 0) {
        console.log ('Buzz');
    } else if (i % 3 == 0) {
        console.log ('Fizz');
    } else {
        console.log (i);
    }
  }
}

function chessBoard(size) {
  var arr = [];
  for (i = 1; i <= size; i++) {
    var a = Array(size + 1).join((i % 2 !== 0) ? " #" : "# ").slice(0, size);
    arr.push(a);
  }
  return arr.join('\n');
}

  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the
  // grid there is either a space or a “#” character. The characters
  // should form a chess board.
  //
  // Passing this string to console.log should show something like this:
  //
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //
  // When you have a program that generates this pattern,
  // define a variable size = 8 and change the program so that
  // it works for any size, outputting a grid of the given width and height.

module.exports.squaresOfMax = squaresOfMax;
module.exports.drawTriangle = drawTriangle;
module.exports.fizzBuzz = fizzBuzz;
module.exports.chessBoard = chessBoard;
