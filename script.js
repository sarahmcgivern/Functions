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
   }
 


   moveForward(5);
   moveBackward(3);
   printLocation(position);
   turnAround();
   moveForward(10);
   moveBackward(5);
   printLocation(position);

}
