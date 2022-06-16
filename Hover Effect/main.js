var tips = 0;
function caculator(bill) {
    return bill >= 50 && bill <= 300 ? bill*0.15 : bill * 0.2;
}

const arrays = [125, 555, 44];

const newArray = arrays.map( value => {
    tips += caculator(value);
    return caculator(value);
})

console.log(newArray);
console.log(tips); 
