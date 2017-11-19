describe("Roman-Numerals", function() {
    var Original = require('../../roman.js');
    var Roman = Original.toRoman;
    var numberGenerator = Original.numberGenerator;
    var placeCheck = Original.placeCheck;

    it('checks for error if input is not a number', function() {
        expect(function() {Roman('5');}).toThrowError(Error, 'input must be a whole number');
        expect(function() {Roman(42.3);}).toThrowError(Error, 'input must be a whole number');
        expect(function() {Roman([25]);}).toThrowError(Error, 'input must be a whole number');
        expect(function() {Roman({number: 9});}).toThrowError(Error, 'input must be a whole number');
    });

    it('toRoman should print the correct numeral for 1 - 9', function() {
        var newRoman1 = Roman(1);
        var newRoman2 = Roman(2);
        var newRoman3 = Roman(3);
        var newRoman4 = Roman(4);
        var newRoman5 = Roman(5);
        var newRoman6 = Roman(6);
        var newRoman7 = Roman(7);
        var newRoman8 = Roman(8);
        var newRoman9 = Roman(9);
        expect(newRoman1).toEqual('I');
        expect(newRoman2).toEqual('II');
        expect(newRoman3).toEqual('III');
        expect(newRoman4).toEqual('IV');
        expect(newRoman5).toEqual('V');
        expect(newRoman6).toEqual('VI');
        expect(newRoman7).toEqual('VII');
        expect(newRoman8).toEqual('VIII');
        expect(newRoman9).toEqual('IX');
    });

    it('placeCheck should return an array of correct roman numerals', function() {
        var oneToNine = placeCheck(0);
        var tens = placeCheck(1);
        var hundreds = placeCheck(2);
        var thousands = placeCheck(3);
        expect(oneToNine).toEqual(jasmine.any(Array));
        expect(oneToNine).toEqual(["I", "V", "X"]);
        expect(tens).toEqual(jasmine.any(Array));
        expect(tens).toEqual(["X", "L", "C"]);
        expect(hundreds).toEqual(jasmine.any(Array));
        expect(hundreds).toEqual(["C", "D", "M"]);
        expect(thousands).toEqual(jasmine.any(Array));
        expect(thousands).toEqual(["M"]);
    });

    it('toRoman should print correct numerals for 10s, 100s, and 1000s and empty string for 0', function() {
        var newRoman0 = Roman(0);
        var newRoman10 = Roman(10);
        var newRoman40 = Roman(40);
        var newRoman50 = Roman(50);
        var newRoman90 = Roman(90);
        var newRoman100 = Roman(100);
        var newRoman500 = Roman(500);
        var newRoman900 = Roman(900);
        var newRoman1000 = Roman(1000);
        var newRoman3000 = Roman(3000);
        expect(newRoman0).toEqual('');
        expect(newRoman10).toEqual('X');
        expect(newRoman40).toEqual('XL');
        expect(newRoman50).toEqual('L');
        expect(newRoman90).toEqual('XC');
        expect(newRoman100).toEqual('C');
        expect(newRoman500).toEqual('D');
        expect(newRoman900).toEqual('CM');
        expect(newRoman1000).toEqual('M');
        expect(newRoman3000).toEqual('MMM');
    });

    it('should print the correct numerals up to 3999', function() {
        var newRoman11 = Roman(11);
        var newRoman42 = Roman(42);
        var newRoman384 = Roman(384);
        var newRoman743 = Roman(743);
        var newRoman3999 = Roman(3999);
        expect(newRoman11).toEqual("XI");
        expect(newRoman42).toEqual("XLII");
        expect(newRoman384).toEqual("CCCLXXXIV");
        expect(newRoman743).toEqual("DCCXLIII");
        expect(newRoman3999).toEqual("MMMCMXCIX");

    });

});