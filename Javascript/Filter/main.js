//filter

const items = [
{name: 'Bike',         'price': 100},
    {name: 'TV',       'price': 200},
    {name: 'Album',     'price': 10},
    {name: 'Book',       'price': 5},
    {name: 'Phone',    'price': 500},
    {name: 'Computer', 'price': 1000},
    {name: 'Keyboard',   'price': 25}
]
/*
const filteredItems = items.filter((item) =>{
    return item.price >= 100
})
console.log(items);
console.log(filteredItems);
*/

/*
//map
  
    const itemNames = items.map((item) =>{
        return item.name
    })
    console.log(itemNames);
*/


// FIND METHOD -----ALLOWS YOU TO FIND SINGLE OBJECT IN AN ARRAY
/*
const foundItems = items.find((item) =>{
    return item.name == 'Book';
})
console.log(foundItems);
*/

//FOREACH METHOD

items.forEach((item) =>{
    console.log(item.name);
})
