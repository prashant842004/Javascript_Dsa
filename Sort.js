const object =[{    product:"earburds",    price:15.99,    quantity:10  },
            {    product:"smartwatches",    price:199.99,    quantity:5},
            {    product:"headphones",    price:99.99,    quantity:20},
            {    product:"speakers",    price:299.99,    quantity:15},
            {    product:"keyboards",    price:59.99,    quantity:12},
            {    product:"mouses",       price:9.99,        quantity:8  }];

const Sorted  = object.slice().sort((a,b) => a.quantity - b.quantity);
// console.log(Sorted);




 /// Destructing 
 
const [{name : Firstname , price : Secondname}]= object;

// console.log(Secondname);

const product ={
    name: "earbuds",
    price: 15.99,
    quantity: 10
}

const {name , price,quantity} = product;

console.log(name, price, quantity);