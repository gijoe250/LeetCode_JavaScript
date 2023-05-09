(function (){
    "use strict";

    console.log(twoSum([2,7,11,15], 9))

    /** TwoSum https://leetcode.com/problems/two-sum/
     * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
     * You may assume that each input would have exactly one solution, and you may not use the same element twice.
     * You can return the answer in any order.
     */
    function twoSum(nums : number[], target : number) : number[] {
        const answer : number[] = []

        for (let i=0; i<nums.length-1; i++){
            for (let j=1; j<nums.length; j++){
                if (i != j && nums[i] + nums[j] == target){
                    console.log([nums[i], nums[j]])
                    answer.push(i, j)
                    return answer
                }
            }
        }
        return answer
    }
})();