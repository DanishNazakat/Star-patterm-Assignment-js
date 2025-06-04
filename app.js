
// let num = 0;

// for(let i = 1; i <= 4; i++){
//     // console.log(num);
//     for(let j = 1; j <= i ; j++){
//         // document.write(i + "<br />");
     
//         document.writeln(i)
//     }
//           document.writeln( "<br />");
// }


// for(let i = 1 ; i <= 4 ; i++){
//     for(let j = 1; j <= i ; j++){
//        document.write(j);
       
//     }
//     document.write( "<br />")
// }



// // Number Increasing Reverse Pyramid
// document.write("dasljlasjksdlj")
// for(let i = 4; i >= 1; i--){
//     document.write( "<br />");
//     for(let j = 1; j <= i;j++ ){
//         document.write(j)
//     }
// }




// // Number changing Pyramid

// for(let i = 1; i <= 4; i++){
    
//     console.log(i);
//     for(let j = 1; j <= i ; j++){
//         document.write(j);
//     }
// }





let star = "*";
// Number Triangle

document.write("<h2>"+"1. Number Triangle"+"</h2>")
for(let i = 1; i <= 4 ; i++){
    let line  = "";
    for(let k = 5 ; k >= i;k-- ){
        line += "&nbsp";
    }
    document.write("<br />");
    document.write(line);
    for(let j = 1; j <= i ; j++){
        document.write("<span class='center' style='text-align:center;'>"+ i +"</span>");
    }
    
}






// Number Increasing Pyramid

document.write("<h2>"+"2. Number Incerasing Pyramid"+"</h2>")
for(let i = 1; i <= 4 ; i++){
    document.write("<br />");
    for(let j = 1; j <= i ; j++){
        document.write("<b class=''>"+ j +"</b>");
    }
}



// Number Incereasing Reverse Pyramid

document.write("<h2>"+"3. Number Increasing Reverse Pyramid"+"</h2>")
for(let i = 4; i >= 1 ; i--){
    document.write("<br />");
    for(let j = 1; j <= i ; j++){
        document.write("<b class='center'>"+ j +"</b>");
    }
}




// Reverse Right half Pyramid

document.write("<h2>"+"4. Reverse Right half Pyramid"+"</h2>")
for(let i = 5; i >= 1 ; i--){
    document.write("<br />");
    for(let j = 1; j <= i ; j++){
        document.write("<b class='center'>"+ star +"</b>");
    }
}





// Left Half Pyramid


document.write("<h2>"+"5. Left Half Pyramid"+"</h2>");
for(let i = 1; i <= 5 ; i++){
    let space = "";
    for(let k = 5; k >= i; k--){
        space += "&nbsp&nbsp";
    }
    document.write("<br />");
    document.writeln(space)
    for(let j = 1; j <= i ; j++){
        document.write("<b class='right'>"+star+"</b>");
    }
}





// Reverse Left Half Pyramid


document.write("<h2>"+"6.  Reverse Left Half Pyramid"+"</h2>");
for(let i = 5; i >= 1 ; i--){
    let space = "";
   
    document.write("<br />");
        document.writeln(space);
    for(let j = 1; j <= i ; j++){
        document.write("<b class='right'>"+star+"</b>");
    }
}





// Triangle Star Pattern

let val = "";
document.writeln("<h2>"+" 7. Triangle Star Pattern"+"</h2>");

for(let i =1; i <= 5 ; i++){
    let space = "";
    for(let j = 5; j>= i; j--){
        space += "&nbsp";
    }
    val += star;
    document.writeln("<b class='center'>"+space+val+"</b>" +"<br />")
}