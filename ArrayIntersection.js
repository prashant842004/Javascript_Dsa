function Intersection(num1,num2)
{
    let result = [];
    let visited = new Array(num2.length).fill(false);

    for(i=0;i<num1.length;i++)
    {
        for(j=0;j <num2.length;j++)
        {
            if(num1[i] === num2[j] && !visited[j])
            {
                result.push(num2[j]);
               visited[j] = true;
                break;
            }
        }
    }
    return result;
}

// let num1 = [1,2,4,2,1];
// let num2 =[1,3,1,3,4,4,2,2];

let num1 = [1,2,4,2,1];
let num2 =[1,2,3,4]

console.log(Intersection(num1,num2));

//  Steps by steps: - 

// num1[0] = 1, finds match at num2[0] → result = [1], visited = [true, false, false, false]

// num1[1] = 2, finds match at num2[1] → result = [1, 2], visited = [true, true, false, false]

// num1[2] = 4, finds match at num2[3] → result = [1, 2, 4], visited = [true, true, false, true]

// num1[3] = 2, no unmatched 2 left in num2 → skip

// num1[4] = 1, no unmatched 1 left in num2 → skip