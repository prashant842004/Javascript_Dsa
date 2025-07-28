function TwoSum(nums ,target)
{
    nums = nums.map((num,index) => ({num , index}));
    // console.log(nums);

    nums.sort((a,b) => a.num - b.num);
    // console.log(nums);

    let left =0 ;
    let right =nums.length - 1;

    while (left <right) {
        const sum = nums[left].num + nums[right].num;
        
        if (sum === target ) {
            return [nums[left].index , nums[right].index];
            
        }
        else if (sum<target)
        {
            left++;
        }
        else
        {
            right--;
        }

    }
}

arr = [12,22,13,19,9,6,7,3,2,4,5,8];
target =9;

console.log(TwoSum(arr,target));