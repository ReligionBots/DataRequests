// const ar = require("shuffle-array");
// const strShuffle = require("@mano96/shuffle-string");

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);

}


strData = "1234567890abcdefdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
var shuffled = strData.split('').sort(() => 0.5 - Math.random()).join('');

// newData = strShuffle(strData);
console.log(shuffled)


console.log();


