"use strict";
(function () {
    "use strict";
    console.log(isValid("()"));
    console.log(isValid("()[]{}"));
    console.log(isValid("(]"));
    console.log(isValid("{[]}"));
    console.log(isValid("["));
    console.log(isValid("([)]"));
    console.log(isValid("]"));
    function isValid(s) {
        let stack = [];
        let answer = true;
        for (let paren of s) {
            if (paren == "(" || paren == "{" || paren == "[") {
                stack.push(paren);
            }
            else if (paren == ")") {
                let open = stack.pop();
                if (open != "(") {
                    answer = false;
                    break;
                }
            }
            else if (paren == "]") {
                let open = stack.pop();
                if (open != "[") {
                    answer = false;
                    break;
                }
            }
            else if (paren == "}") {
                let open = stack.pop();
                if (open != "{") {
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
//# sourceMappingURL=ValidParenthesis.js.map