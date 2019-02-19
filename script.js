// "use strict";
// {
//     let position = 0;
//     let distance = 0;
//     let direction = 'positive';
   

//     function moveForward (distance) {
//         if (direction === 'positive') {
//             position += distance;
//         } else {
//             position -= distance;
//         }
//     }
 

//     function moveBackward (distance) {
//         if (direction === 'positive') {
//             position -= distance;
//         } else {
//             position += distance;
//         }
//     }


//     function printLocation (position) {
//         console.log(position);
//     }


//     function turnAround () {
//     if (direction === 'positive') {
//         direction = 'negative';
//     } else {
//         direction = 'positive';
//     }
//    }
 


//    moveForward(5);
//    moveBackward(3);
//    printLocation(position);
//    turnAround();
//    moveForward(10);
//    moveBackward(5);
//    printLocation(position);

// }


"use strict";
{
    let position = 0;
    let distance = 0;
    let direction = 'positive';
   

    function moveForward (distance) {
        if (direction === 'positive') {
            position += distance;
        } else {
            position -= distance;
        }
    }
 

    function moveBackward (distance) {
        if (direction === 'positive') {
            position -= distance;
        } else {
            position += distance;
        }
    }


    function printLocation (position) {
        console.log(position);
    }


    function turnAround () {
        if (direction === 'positive') {
            direction = 'negative';
        } else {
        direction = 'positive';
    }



    function turnLeft () {
        if (direction === 'North') {
            direction = 'West';
        
        } else if (direction === 'West') {
                direction = 'South';

        } else if (direction === 'South') {
            direction = 'East';}

        } else (direction === 'East'){
            direction = 'North';
        }
    }

    function turnRight () {
        if (direction === 'positive') {
            direction = 'negative';
        } else {
            direction = 'positive';
        }

   }
 


   moveForward(5);
   moveBackward(3);
   printLocation(position);
   turnAround();
   moveForward(10);
   moveBackward(5);
   printLocation(position);

}
