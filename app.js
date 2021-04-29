const optellen = function (...args) {
    return args.reduce((acc, item) => {
        return acc + item;
    })
}

console.log(optellen(1, 2, 3, 4, 5, 6));

const optellen = function (num1, num2, num3) {
    return num1 + num2 + num3;
}

const cijfers = [1, 2, 3];

console.log(optellen(...cijfers));
