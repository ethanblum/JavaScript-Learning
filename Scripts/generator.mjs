export function hw2q1() {

  // Question 1 on Homework 2 CSC 333
  // Ethan Blum

  var output = 0;
  var i = 0;

  while (i > -1) {

    var temp = i + 1

    if (i <= 6) {

      output = Math.pow(2, temp);
      console.log(output);

    } else {

      var continueSearch = 'Yes';
      continueSearch = prompt('Would you like me to continue? Yes or No\n');

      if (continueSearch === 'Yes') {

        output = Math.pow(2, temp);
        console.log(output);

      }
      if (continueSearch === 'No') {
        i = -1000;

      } else {

        console.log("How did you get here?? ERROR INCORRECT VALUE ENTERED. Try Again.")
        i = i - 1;

      }

    }

    i++;
  }



}