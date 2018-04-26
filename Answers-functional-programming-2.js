// solve this challenge using multiple functions

/*
you're at a starbucks, you are trying to calculate a customer's total drink price:

small = regular price
medium = 120% regular price
large = 140% regular price

an additional 9% sales tax is added to the subtotal

given the drink order below(drink array), calculate the total price of the customer's drinks

note: price is listed in cents (ex: 1 dollar => price: 100),
extra credit: your function should return in currency format (ex: if total is 1000, you should return "$10.00")

there are many different ways to solve this, functional programming is at your disposal!
*/

const drinks = [
  {
    name: "coffee",
    price: 300,
    size: "small"
  },
  {
    name: "tea",
    price: 200,
    size: "medium"
  },
  {
    name: "hot chocolate",
    price: 250,
    size: "large"
  }
]

// standard

const totalPrice = drinks => {
  let subTotal = 0;
  for(let i = 0; i < drinks.length; i++) {
    let price = drinks[i].price;
    if(drinks[i].size === 'medium') {
      price = price * 1.2;
    } else if(drinks[i].size === 'large') {
      price = price * 1.4;
    }
    subTotal += price;
  }
  return Math.floor(totalAfterTax(subTotal));
}

const totalAfterTax = subTotal => {
  return subTotal * 1.09;
}

// advanced

const totalPrice = drinks => {
  return totalAfterTax(drinks.reduce((acc, drink) => (
    acc + calculateDrinkPrice(drink)
  ),0));
}

const calculateDrinkPrice = obj => {
  if(obj.size === 'small') {
    return obj.price;
  } else if (obj.size === 'medium') {
    return obj.price * 1.2;
  } else {
    return obj.price * 1.4;
  }
}

const totalAfterTax = subTotal => {
  return subTotal * 1.09;
}

const convertNumberToCurrency = number => {
  n = Math.floor(number);
  return `$${Math.floor(n / 100)}.${Math.floor((n % 100)/10)}${n % 10}`;
}