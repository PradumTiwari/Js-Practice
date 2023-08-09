//Immediately invoked function expression

// GLOBAL SCOPE KE POLLUTION SE PREVENTION OR PREVENT FROM GLOBAL VARIABLE
//WE USE IIFE

//() THIS IS USED FOR FUNCTION DECLARATION AND SECOND BRACKETS () IS USED FOR EXECUTION

//bOTH TOGETHER WRIITEN FOR IIFE AS ()()

//EXAMPLE

(function(){
    console.log("This function can be called by itself");
})();

(function(name){
    console.log("This IIFE function Takes argument and its synatax is as follows",name);
})("Pradum");

