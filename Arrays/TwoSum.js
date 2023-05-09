(function () {
    "use strict";
    // console.log(twoSum([2,7,11,15], 9))
    console.log(twoSumFast([2, 7, 11, 15], 9));
    /** TwoSum https://leetcode.com/problems/two-sum/
     * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
     * You may assume that each input would have exactly one solution, and you may not use the same element twice.
     * You can return the answer in any order.
     */
    function twoSum(nums, target) {
        var answer = [];
        for (var i = 0; i < nums.length - 1; i++) {
            for (var j = 1; j < nums.length; j++) {
                if (i != j && nums[i] + nums[j] == target) {
                    console.log([nums[i], nums[j]]);
                    answer.push(i, j);
                    return answer;
                }
            }
        }
        return answer;
    }
    function twoSumFast(nums, target) {
        var map = {};
        var answer = [];
        map[target - nums[0]] = 0;
        for (var i = 1; i < nums.length; i++) {
            console.log(Object.keys(map));
            if (map[nums[i]] != undefined) {
                console.log("Key Found");
                answer.push(map[nums[i]], i);
                return answer;
            }
            map[target - nums[i]] = i;
        }
        return answer;
    }
})();
