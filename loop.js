// Explain Why this for loop not printing consecutive Loop Values?

for (var i = 1; i <= 2; i++) {
    setTimeout(function() { console.log(i) }, 500);
}

// solution
//   setTimeout(function(){
        
//   for (var i = 1; i <= 2; i++) {
//       console.log(i) ;
//   }
// }, 500)


// for loop is used to provide values until the condition satisfies but when it is used for the setTimeOut function,it behaves differently because conditional loop is done within another conditional function
//   when it is provided in the setTimeOut function,It works because for each 500ms it loops which is correct syntax.