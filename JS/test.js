var letterCombinations = function(digits) {
    if (digits.length === 0){
        return [];
    }
    const digitArr = {
     '2': ['a', 'b', 'c'],
     '3': ['d', 'e', 'f'],
     '4': ['g', 'h', 'i'],
     '5': ['j', 'k', 'l'],
     '6': ['m', 'n', 'o'],
     '7': ['p', 'q', 'r', 's'],
     '8': ['t', 'u', 'v'],
     '9': ['w', 'x', 'y', 'z'],
    };
    if (digits.length > 1){
        const firstDigit = digits.slice(0, 1);
        const otherDigit = digits.slice(1);
        const otherLetterCombo = letterCombinations(otherDigit);
        const firstDigitCombo = digitArr[firstDigit];
        let resultArray = [];
        firstDigitCombo.forEach(item1 => {
            otherLetterCombo.forEach(item2 => {
                resultArray.push(item1 + item2);
            })
        })
        return resultArray;
        }else{
            return digitArr[digits];
        }
};