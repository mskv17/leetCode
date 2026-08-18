/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k%nums.length;
    console.log(k);
    const parts = nums.slice(nums.length-k,nums.length);
    const rest = nums.slice(0,nums.length-k);
    
    nums.splice(0,nums.length,...parts,...rest);
    console.log(nums)
};
