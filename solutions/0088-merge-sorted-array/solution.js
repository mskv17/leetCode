/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let arr = [];
    const n1s = nums1.slice(0,m);
    const n2s = nums2.slice(0,n);
    arr = [...n1s,...n2s];
    arr = arr.sort((a,b)=>a-b);
    nums1.length = 0;
    for (let i=0;i<arr.length;i++) {
        nums1.push(arr[i]);
    }
};
