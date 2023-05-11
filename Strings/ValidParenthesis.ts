(function (){
    "use strict";

    // Input: s = "()"
    // Output: true
    console.log(isValid("()"))

    // Input: s = "()[]{}"
    // Output: true
    console.log(isValid("()[]{}"))

    // Input: s = "(]"
    // Output: false
    console.log(isValid("(]"))

    // Input: s = "{[]}"
    // Output: true
    console.log(isValid("{[]}"))

    // Input: s = "["
    // Output: false
    console.log(isValid("["))

    // Input: s = "([)]"
    // Output: false
    console.log(isValid("([)]"
    ))



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
    function isValid(s: string): boolean {
        let stack = []
        let answer = true
        for (let paren of s){
            if(paren == "(" || paren == "{" || paren == "["){
                stack.push(paren)
            }
            else if (paren == ")" ){
                let open = stack.pop()
                if (open != "("){
                    answer = false
                    break
                }
            }
            else if (paren == "]" ){
                let open = stack.pop()
                if (open != "["){
                    answer = false
                    break
                }
            }
            else if (paren == "}" ){
                let open = stack.pop()
                if (open != "{"){
                    answer = false
                    break
                }
            }
        }
        if (stack.length > 0)
            answer = false
        return answer
    }
})();