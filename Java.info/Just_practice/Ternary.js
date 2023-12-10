var a=100;
var b=200;
var c;

c="Hello Dear " + (a<=90 && b>=100  ? "true" : "false")

document.write(c);
// Below is for switch case tutorial
let point = 90;
switch (true) {
    case point >= 51 && point <= 60:
        console.log('Your price: E');
        break;
    case point >= 61 && point <= 70:
        console.log('Your price: D');
        break;
    case point >= 71 && point <= 80:
        console.log('Your price: C');
        break;
    case point >= 81 && point <= 90:
        console.log('Your price: B');
        break;
    case point >= 91 && point <= 100:
        console.log('Your price: A');
        break;
    default:
        console.log('You did not pass');
}

// Switch case example for day checking
       var day = 8 ;
       switch ( day ) {
           case 0 : case 1 : case 2 :
                 document.write ( " Today is Monday " ) ;
           break ;
           case 3 :
                 document.write ( " Today is Thursday " ) ;
           break ;
           case 4 :
                 document.write ( " Today is Friday " ) ;
           break ;
           case 5 :
                 document.write ( " Today is Saturday " ) ;
           break ;
           case 6 :
                 document.write( "Today is Sunday " ) ;

                 default:
                    document.write("Enter the valid number")
       }
