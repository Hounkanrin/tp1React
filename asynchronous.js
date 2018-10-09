
let someUrl= require ('https')
someUrl('https://www.random.org/');
/*function getRandom(){
    var result = Math.random();
    return result;
}
function getRandomIn(min, max){
    var min = 1; 
    max = getRandom()*1.2;
}*/

async function asynchroRandom(someUrl){
    let myArray = [];
    let a = 10; 
    let max = 100; 
    
    return new Promise(function(resolve, reject){
        request(someUrl, function(myArray, firstResponse){
            if (myArray.length > 10){
                reject("An error occured")
            }
            else {
                resolve(firstResponse);
                if (firstResponse !=1){
                    myArray.length++;
                myArray.add(firstResponse);
                }
                
                }
        })
    })
}
asynchronous('https://www.random.org/')
.then (function(result){ 
    for(var i=0; i< myArray.length; i++){
    
        if( firstResponse==i){
            firstResponse = firstResponse*2;
            myArray[i]=firstResponse; 
        }
        else {
            myArray[i]=firstResponse; 
        } 
    } 
})
.catch(function(error){

})
.finaly(function(){
    
})
   
    




    
}