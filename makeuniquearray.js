function minIncrement(nums)
{
    nums.sort((a,b) => a-b);
    let moves = 0;
    console.log(nums);

    for(let i = 0 ;i < nums.length ; i++)
    {
        console.log(`nums[i] is : ${nums[i]}  && nums[i-1] is : ${nums[i-1]}`);
        if(nums[i] <= nums[i-1])
        {
            const increment = nums[i - 1] + 1 - nums[i];
            console.log(`Increment is : ${increment}`);
            nums[i] = nums[i-1] + 1;
            console.log(`nums[i]  is : ${nums[i]}`)
            moves += increment;
        }
        console.log(`moves is ${i} : ${moves}`);
    }
    return moves;
}

const nums = [ 3,2,1,2,1,7];
console.log(minIncrement(nums));