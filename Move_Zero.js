function MoveZero(nums) {

    let lastnonzero = 0;

    for(let cur =0;cur< nums.length;cur++) 
    {

        if(nums[cur] != 0) 
        {
            [nums[lastnonzero], nums[cur]] = [nums[cur],nums[lastnonzero]];
            lastnonzero++;
        }
    }
    return nums;
}

const nums2 = [0,1,0,3,12];

console.log(MoveZero(nums2));