const myNumber = [1,2,3]

// const myTotal = myNumber.reduce( function(acc, currValue){
//     console.log(`acc:${acc} and currvalue:${currValue}`);
    
//     return acc + currValue
// }, 0)

//OR

const myTotal = myNumber.reduce( (acc, currValue)=>(acc + currValue), 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"Js Course",
        price:2999
    },
    {
        itemName:"mobile dev Course",
        price:6999
    },
    {
        itemName:"DSA Course",
        price:9999
    },
    {
        itemName:"Data science course",
        price:12999
    }
   
]

const PriceToPay = shoppingCart.reduce( (acc, item)=> acc + item.price , 0)
console.log(PriceToPay);
