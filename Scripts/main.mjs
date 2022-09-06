import {hw2q1} from './generator.mjs'
import {hw2q2} from './filter.mjs'
import {hw2q3} from './map.mjs'

var x = "-1";

x = prompt("What program would you like to run first? \n" +
  "1: Homework Question 1: Generator.js\n" +
  "2: Homework Question 2: Filter.js\n" +
  "3: Homework Question 3: Map.js\n" +
  "Please input either 1, 2, or 3: ");

switch (x) {
  case '1':
    hw2q1();
    break;

  case '2':
    hw2q2();
    break;

  case '3':
    hw2q3();
    break;

  default:
    write("Incorrect input. Please try again!");
    break;

}

