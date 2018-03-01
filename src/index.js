// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
        var result = {};

    if (currency > 10000) return{
        error: "You are rich, my friend! We don't have so much coins for exchange"
    } ;

    while(currency > 0){
        if (currency / 50 >= 1){ //H
            result.H = Math.floor(currency / 50);
            currency = currency % 50;
        }
        else if (currency / 25 >= 1) { //Q
            result.Q = Math.floor(currency/25);
            currency = currency % 25;         
         }
                
        else if (currency / 10 >= 1){ //D
            result.D = Math.floor(currency/10);
            currency -= result.D * 10;; 
         }

        else if (currency / 5 >= 1){ //N
            result.N = Math.floor(currency/5);
            currency = currency % 5;   
        }
        else {  //P
               result.P = Math.floor(currency / 1);
               currency = currency % 1;
        }
    }
    return result;
}
