//octal to decimal 
//calculate upto any digit exact precision

var BigNumber = require('bignumber.js');
var object= {};

object.convert = function(octal){

    octal = octal.toString();
    octal = octal.toLowerCase();
    var octalLength = octal.length;

    //reverse the octal for decimal conversion

    var octalArray = octal.split("");
    var reverseArray = octalArray.reverse();
    var newoctal = reverseArray.join("");



    ///////////////////////////////////////////


    var decimal = new BigNumber('0');


    for(var i=0;i<octalLength;i++){

        //power calculation//
        var firstTemp = new BigNumber('8');
        var secondTemp = new BigNumber(i.toString());
        var temp  = firstTemp.pow(secondTemp);
        ///////////////////////////////////////


        var octalNumber = new BigNumber(newoctal[i]);

        temp = octalNumber.mul(temp);

        decimal = decimal.add(temp);

    }

    return decimal.toString();

};


module.exports = object;