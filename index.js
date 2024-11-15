// assignment 9

// var x= window.prompt("please enter a number !");
// var i ;

// if (x<1){
//     console.log("no numbers exist");
// }
// else{
//     for (i=1 ; i<=x ; i++){
//         console.log(i);
//     };
// };



// assignment 10

// var x= window.prompt("please enter a number !");
// var i ;
// for (i=1 ; i<=12 ; i++){
//     console.log(i*x);
// };



// assignment 11


// var x= window.prompt("please enter a number !");
// var i ;
// for (i=2 ; i<=x ; i+=2){
//     console.log(i);
// };




// **another way for assignment 11**

// var x= window.prompt("please enter a number !");
// var i ;

// if (x<2){
//     console.log("no even numbers exist");
// }
// else {
   
//     for (i=2 ; i<=x ; i+=2){
//         console.log(i);
//     };

// };





// assignment 12  (power)


// var x= Number(window.prompt("please enter number!"));
// var y= Number(window.prompt("please enter power!"));
// var result = 1;
// var i ;
// for (i=1 ; i<=y ; i++){
//     result =result*x;
// }
// console.log(result);




// **another way for assignment 12  (power)**

// var x= Number(window.prompt("please enter number!"));
// var y= Number(window.prompt("please enter power!"));
// var result = 1;
// var i ;

// if ( y>=0){
//     for (i=1 ; i<=y ; i++){
//         result =result*x;
//     }
//     console.log(result);
// }
// else if (y<0) {
//     for (i=-1 ; i>=y ; i+=-1){
//         result =result*x;
//     }
//     console.log(1/result);
// };




// assignment 12  (subjects)

// var x= Number(window.prompt("please enter English Mark (from zero to 100 )!"));
// var y= Number(window.prompt("please enter Arabic Mark (from zero to 100 )!"));
// var z= Number(window.prompt("please enter Math Mark (from zero to 100 )!"));
// var f= Number(window.prompt("please enter Frech Mark (from zero to 100 )!"));
// var p= Number(window.prompt("please enter Physics Mark (from zero to 100 )!"));


// if ( x<0 || y<0 || z<0 || f<0 || p<0 || x>100 || y>100 || z>100 || f>100 || p>100){
//     console.log("Error (Mark must be from zero to 100 )");
// }

// else {
// var sum = x+y+z+f+p ;
// var avg = sum/5 ;
// var perct = avg
//     console.log("total mark =" , sum);
//     console.log("Average Marks =" , avg);
//     console.log("percentage = " , perct,"%");

// };



// assignment 13

// var x= Number(window.prompt("please enter Month Number !"));
// if (x<=0 || x>12){
//     console.log("Error");
   
// }
// else if ( x==1 || x==3 || x==5 || x==7 || x==8 || x==10 || x==12){
//     console.log("Days In Month : " , 31);
// }
// else if ( x==2){
//     console.log("Days In Month : " , 28);

// }
// else{
//     console.log("Days In Month : " , 30);

// };

// assignment 14


// var x= Number(window.prompt("please enter Physics Mark (from zero to 100 )!"));
// var y= Number(window.prompt("please enter Chemistery Mark (from zero to 100 )!"));
// var z= Number(window.prompt("please enter Biology Mark (from zero to 100 )!"));
// var f= Number(window.prompt("please enter Mathematics Mark (from zero to 100 )!"));
// var p= Number(window.prompt("please enter  Computer Mark (from zero to 100 )!"));

// var perct = (x+y+z+f+p)/5 ;


// if ( x<0 || y<0 || z<0 || f<0 || p<0 || x>100 || y>100 || z>100 || f>100 || p>100){
//     console.log("Error (Mark must be from zero to 100 )");
// }
// else{
//      checkgrade(perct);

// }


// function checkgrade (perct){
//     if(perct<40){
//         console.log("percentage =", perct );
//         console.log("grade = F")
//     }

//     else if(perct>=40 && perct<60){
//         console.log("percentage =", perct );
//         console.log("grade = E")
//     }
//     else if(perct>=60 && perct<70){
//         console.log("percentage =", perct );
//         console.log("grade = D")
//     }

//     else if(perct>=70 && perct<80){
//         console.log("percentage =", perct );
//         console.log("grade = C")
//     }

//     else if(perct>=80 && perct<90){
//         console.log("percentage =", perct );
//         console.log("grade = B")
//     }

//     else if(perct>=90 && perct<=100){
//         console.log("percentage =", perct );
//         console.log("grade = B")
//     }
//     else{
//         console.log("Mark must be from zero to 100")

//     }
// };