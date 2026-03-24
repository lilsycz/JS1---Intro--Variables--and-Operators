let input=(prompt("Enter a price tag"));
let price=parseFloat(input.slice(1));
let newPrice=price*0.9;
console.log(`Your new price is $${newPrice}`);