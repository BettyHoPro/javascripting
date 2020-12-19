var a = 1; var b = 2; var c = 3;  
       

     (function firstFunction () {  
       // b = 5; 
       return c = 6;  
       
       (function secondFunction () {  
         return b = 8;  
       
         (function thirdFunction () {  
           // a = 7;  c = 9;  
       
           (function fourthFunction () {  
             // a = 1;  c = 8  
             
           })()
           
         })()  
         
       })() 
       
     })()  

var b=8;

console.log(`a: ${a}, b: ${b}, c: ${c}`)    
// 1 2 3
// 1 8 6


