function Reverse(input) {
    
    let ReversedString ="";

    for (let i = input.length-1; i >= 0 ; i--)
    {
        ReversedString += input[i];
    }
    return ReversedString;
}

let str = "prashant";

console.log(Reverse(str))


// ----------------------------------------------2nd Approach-----------------------------------------------

let str1 = "prashant";
let ReversedString =str1.split('').reverse().join('');
console.log(ReversedString)