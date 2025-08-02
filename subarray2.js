function subarray(nums)
{
    let maxproduct = nums[0];

    for (i = 0; i < nums.length; i++) {
        let product = 1;
        for (j = 0; j < nums.length; j++) {
            
            product = product * nums[j];
            maxproduct = Math.max(maxproduct , product);
            
        }   
    }
    return maxproduct;
}

nums = [2,3,-2, 8];
console.log(subarray(nums));