


// function TwoSumNumber(l1,l2)
// {
//     var element =[];
//     for (let i = 0; i < l1.length; i++) {
//         for (let j = i; j < l2.length; j++) {
//             element.push(l1[i] + l2[j]);
//             if(element[i] > 9 )
//             {
//                 element.split('');
//             }
            
//         }
        
//     }
//     return element;
// }
// let l1 = [2,4,3];
// let l2 = [5,7,6];
// console.log(TwoSumNumber(l1,l2));






function addTwoNumbers(l1, l2) {
    let carry = 0;
    let result = [];
    let i = 0, j = 0;

    while (i < l1.length || j < l2.length || carry > 0) {
        const val1 = i < l1.length ? l1[i] : 0;
        const val2 = j < l2.length ? l2[j] : 0;

        const sum = val1 + val2 + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);

        i++;
        j++;
    }

    return result;
}

// Example usage:
const l1 = [2,4,3];
const l2 = [5,6,4];
console.log(addTwoNumbers(l1, l2)); // Output: [7, 0, 8]
