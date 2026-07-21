/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k=0;
    const temp = [];
    for (let i =0 ;i<nums.length;i++) {
        if (nums[i] !== val) {
            temp[k] = nums[i];
            k+=1;
        }
    }
    nums.length = 0;
    nums.push(...temp);
    return k;
};

