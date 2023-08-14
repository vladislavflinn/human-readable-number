module.exports = function toReadable(number) {
    const fromZeroToNineteen = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const decimals = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number < 20) {
        return fromZeroToNineteen[number];
    }
    if (number < 100 && number % 10 !== 0) {
        return (
            decimals[String(number)[0] - 2] +
            " " +
            fromZeroToNineteen[String(number)[1]]
        );
    }
    if (number < 100 && number % 10 === 0) {
        return decimals[String(number)[0] - 2];
    }
    if (number < 1000 && number % 100 === 0) {
        return fromZeroToNineteen[String(number)[0]] + " " + "hundred";
    }

    if (number < 1000 && Number(String(number)[1] + String(number)[2]) < 20) {
        return (
            fromZeroToNineteen[String(number)[0]] +
            " " +
            "hundred" +
            " " +
            fromZeroToNineteen[Number(String(number)[1] + String(number)[2])]
        );
    }
    if (number < 1000 && number % 10 === 0) {
        return (
            fromZeroToNineteen[String(number)[0]] +
            " " +
            "hundred" +
            " " +
            decimals[String(number)[1] - 2]
        );
    }
    if (number < 1000) {
        return (
            fromZeroToNineteen[String(number)[0]] +
            " " +
            "hundred" +
            " " +
            decimals[String(number)[1] - 2] +
            " " +
            fromZeroToNineteen[String(number)[2]]
        );
    }
};
