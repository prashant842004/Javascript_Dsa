const arr = [1,2,2,3,3,4,3,2,2,3,4,2,1,3,4,6,8,9,7,5,5,3,3,5,3];

const filter = arr.filter((item,index)=>
{
    return arr.indexOf(item) === index;

});

console.log(filter);   // this filter is end here 
// first type of remove dublicates is complted by filter method


// -------------------XXXX---------------------------

// remove dublicates from array by set method


console.log(typeof(console.log(...new Set(arr))));   

// In above typeof methods the typeoff is undefined because
//  it is not clear to ustify the typeof in it


const uniquearray = [...new Set(arr)];
const uniquearray1 = {...new Set(arr)};

// console.log(uniquearray);

// console.log(typeof(uniquearray));

