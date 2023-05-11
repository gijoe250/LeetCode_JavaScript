"use strict";
(function () {
    "use strict";
    console.log(twoSumFast([2, 7, 11, 15], 9));
    function twoSum(nums, target) {
        const answer = [];
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = 1; j < nums.length; j++) {
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
        const map = {};
        let answer = [];
        map[target - nums[0]] = 0;
        for (let i = 1; i < nums.length; i++) {
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
//# sourceMappingURL=TwoSum.js.map