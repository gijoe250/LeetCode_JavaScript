(function () {
    "use strict";
    // Input: s = "()"
    // Output: true
    console.log(isValid("()"));
    // Input: s = "()[]{}"
    // Output: true
    console.log(isValid("()[]{}"));
    // Input: s = "(]"
    // Output: false
    console.log(isValid("(]"));
    // Input: s = "{[]}"
    // Output: true
    console.log(isValid("{[]}"));
    // Input: s = "["
    // Output: false
    console.log(isValid("["));
    // Input: s = "([)]"
    // Output: false
    console.log(isValid("([)]"));
    /** Valid Parenthesis https://leetcode.com/problems/valid-parentheses/
     * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
     * An input string is valid if:
     *  Open brackets must be closed by the same type of brackets.
     *  Open brackets must be closed in the correct order.
     *  Every close bracket has a corresponding open bracket of the same type.
     *
     *  Constraints:
     *  1 <= s.length <= 104
     *  s consists of parentheses only '()[]{}'.
     */
    function isValid(s) {
        var stack = [];
        var answer = true;
        for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
            var paren = s_1[_i];
            if (paren == "(" || paren == "{" || paren == "[") {
                stack.push(paren);
            }
            else if (paren == ")") {
                var open_1 = stack.pop();
                if (open_1 != "(") {
                    answer = false;
                    break;
                }
            }
            else if (paren == "]") {
                var open_2 = stack.pop();
                if (open_2 != "[") {
                    answer = false;
                    break;
                }
            }
            else if (paren == "}") {
                var open_3 = stack.pop();
                if (open_3 != "{") {
                    answer = false;
                    break;
                }
            }
        }
        if (stack.length > 0)
            answer = false;
        return answer;
    }
})();
