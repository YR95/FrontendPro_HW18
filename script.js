const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function enerateKey(number, characters) {
    let randElem;
    let finalString = " ";
    for (let i = 0; i < number; i++) {
        randElem = parseInt(getRandomArbitrary(0, characters.length-1));
        finalString = finalString + (characters[randElem]);
    }
    console.log(finalString);
    return finalString;
}


enerateKey(16, characters);
enerateKey(3, characters);
enerateKey(113, characters);