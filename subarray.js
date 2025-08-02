function subarray(nums) {
    let maxproduct =nums[0];
    let minproduct =nums[0];
    let result = nums[0];

    console.log("maxproduct" ,maxproduct);
    console.log("minproduct" ,minproduct);
    console.log("result" ,result);

    for(i=1;i<nums.length; i++)
    {
        let num = nums[i];
        if(num <0)
        {
            [maxproduct , minproduct] = [minproduct , maxproduct];

        }
        maxproduct = Math.max(num , num * maxproduct);
        minproduct = Math.min(num , num * minproduct);
        result  = Math.max(result , maxproduct);
        console.log("maxproduct" ,maxproduct);
        console.log("minproduct" ,minproduct);
        console.log("result" ,result);
        }

        return result;
}

nums = [2,3,-2,6];
console.log(subarray(nums));