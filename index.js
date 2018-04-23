var letters = ['a','b','c','d','e','f'];

function getNum() {
    return Math.floor(Math.random() * 6);
}

var res = getNum();
console.log(letters[res]);