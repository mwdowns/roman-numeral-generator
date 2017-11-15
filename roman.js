function toRoman(arabic) {
    if ((typeof arabic !== 'number') || (arabic % 1 !== 0)) {
        throw new Error('input must be a whole number');
    }
    return arabic.toString().split("").reverse().map(function(arabic, index) {
        return numberGenerator(arabic, index);
    }).reverse().join("");
}

function numberGenerator(arabic, index) {
    num = parseInt(arabic);
    romanArr = placeCheck(index);
    return getRomanForSingleNumber(num, romanArr); 
}

function getRomanForSingleNumber(num, romanArr) {
    if (oneTwoThreeChecker(num)) {
        return Array(num + 1).join(romanArr[0]);
    }
    if (fourChecker(num)) {
        return romanArr[0] + romanArr[1];
    }
    if (fiveChecker(num)) {
        return romanArr[1];
    }
    if (sixSevenEightChecker(num)) {
        return romanArr[1] + Array(num - 4).join(romanArr[0]);
    }
    if (nineChecker(num)) {
        return romanArr[0] + romanArr[2];
    }
    return '';
}

function placeCheck(index) {
    if (onesChech(index)) {
        return ["I", "V", "X"];
    }
    if (tensCheck(index)) {
        return ["X", "L", "C"];
    }
    if (hundredsCheck(index)) {
        return ["C", "D", "M"];
    }
    return ["M"];
}

function onesChech(index) {
    return index === 0;
}

function tensCheck(index) {
    return index === 1;
}

function hundredsCheck(index) {
    return index === 2;
}

function oneTwoThreeChecker(num) {
    return num >= 1 && num < 4;
}

function fourChecker(num) {
    return num === 4;
}

function fiveChecker(num) {
    return num === 5;
}

function sixSevenEightChecker(num) {
    return num >= 6 && num < 9;
}

function nineChecker(num) {
    return num === 9;
}

module.exports = {
    toRoman,
    numberGenerator,
    placeCheck
}