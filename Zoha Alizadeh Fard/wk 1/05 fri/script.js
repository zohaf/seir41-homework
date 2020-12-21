// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:


//on
//off
//journey [array of stops] - that includes the on and the off stop & the array length - total number of stops



const lineN = {
  name: 'N line',
  stops: [
    'Times Square', 
    '34th',
    '28th',
    '23rd',
    'Union Square',
    '8th',
  ] 
};

// function tripAdvisor (stopOn, stopOff){};  
//stopOn = ('34th') = 2;


let stopNumb;

function getStop(stopName) {


  for (let i = 0; i < lineN.stops.length; i++) {
  
if(stopName === lineN.stops[i]) {
  return stopNumb = i+1

}
}
};


const stopOn = getStop('34th');
const stopOff = getStop('23rd');


const stopCounter = stopOff - stopOn;
Math.abs(stopCounter);


console.log(`You must travel from ${stopOn} through the following number of stops: ${stopCounter} on the ${lineN.name}: for ` 
//34th, 28th, 23rd, Union Square." 

);

console.log(stopOff);





//if(stopOn === lineN.stops[i]){


//input:
// const stopOn = // 34th
// const stopOff = stopFactory('N line', '28th'); // lineN[2]


// const lineL = [
//   '8th', 
//   '6th',
//   'Union Square',
//   '3rd',
//   '1st',
// ];

// const line6 = [
//   'grand Central', 
//   '33rd',
//   '23rd',
//   'Union Square',
//   'Astor Place',
// ];

// const allLines = [lineN, lineL, line6];

// // output










// "Change at Union Square." 


// // "Your journey continues through the following stops: 23rd, 28th, 33rd." listing the array
// // "7 stops in total." [array length]




// it takes the argument the stop on and the stop off



//example: stop on: line-N 34th / stop off: line-N 23rd


// const stopOn = (lineN[i] || lineL[i] || line6[i]);
// const stopOff = (lineN[i] || lineL[i] || line6[i]);

// console.log()



// procedure : 
//choose the station you are getting on
//choose the station you are getting off


// eg: stopOn('Time Square', 'N line'); stopFactory('Time Square', 'N line')
// function stopOn (stopFactory.s, stopFactory.l) {

// };



// function (stopOn, stopOff) {
//   console.log(`your travel: get on ${stopOn} to ${stopOff}: `)
// };



// 

// const stopFactory = function (l, s) {
//   return {
//     lineName: l,
//     stopName: s
//   };
// };