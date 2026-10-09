/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let seenum = new Set();

    for(let num of nums)
    {
        if(seenum.has(num)){
            return true;
        } 
        
       seenum.add(num);
    }
  return false;
};