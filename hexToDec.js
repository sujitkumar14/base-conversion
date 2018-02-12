//hex to decimal 
//calculate upto any digit exact precision

var BigNumber = require('bignumber.js');
var object= {};

object.convert = function(hex){

	hex = hex.toString();


    var hexTable = {

        '0':'0',
        '1':'1',
        '2':'2',
        '3':'3',
        '4':'4',
        '5':'5',
        '6':'6',
        '7':'7',
        '8':'8',
        '9':'9',
        'a':'10',
        'b':'11',
        'c':'12',
        'd':'13',
        'e':'14',
        'f':'15'

    };


    if(hex.substr(0,2) === '0x'){
        hex = hex.substr(2);
    }

    hex = hex.toLowerCase();
    var hexLength = hex.length;

    //reverse the hexadecimal for decimal conversion

    var hexArray = hex.split("");
    var reverseArray = hexArray.reverse();
    var newHex = reverseArray.join("");



    ///////////////////////////////////////////


    var decimal = new BigNumber('0');


    for(var i=0;i<hexLength;i++){

        //power calculation//
        var firstTemp = new BigNumber('16');
        var secondTemp = new BigNumber(i.toString());
        var temp  = firstTemp.pow(secondTemp);
        ///////////////////////////////////////


        var hexNumber = new BigNumber(hexTable[newHex[i]]);

        temp = hexNumber.mul(temp);

        decimal = decimal.add(temp);

    }

    return decimal.toString();

};



module.exports = object;