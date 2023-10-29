var readline = require('readline-sync');

var input = readline.question('What phrase would you like to encrypt? ');

//https://www.asciitable.com/
function encrypt(str){
    var encrypted = ""
    var shift = parseInt(readline.question('How many letters would you like to shift? '));

    for (var i = 0; i < str.length; i++){
        let asciiNum = str[i].charCodeAt();
            //console.log(asciiNum)
            if (asciiNum >= 65 && asciiNum <=77){
                encrypted += String.fromCharCode(asciiNum + shift);

                }else if (asciiNum >= 97 && asciiNum <= 122){
                    encrypted += String.fromCharCode(asciiNum + shift);

                }else if (asciiNum >=78 && asciiNum <= 90){
                    encrypted += String.fromCharCode(asciiNum - shift)

                    }else {
                        encrypted += str[i]
                    }
        }
        console.log(encrypted)
    return encrypted;
}

encrypt(input)