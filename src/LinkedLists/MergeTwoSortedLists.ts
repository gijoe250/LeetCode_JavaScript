/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


let list1 = newNode(1);
list1.next = newNode(2);
list1.next.next = newNode(4);

let list2 = newNode(1);
list2.next = newNode(3);
list2.next.next = newNode(4);

//Output: [1,1,2,3,4,4]
console.log(mergeTwoLists(list1, list2))



 
function newNode(key : number){
    let temp = new ListNode(key);
    return temp;
}
 

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let mergeList = new ListNode()
    let temp = mergeList

    while(true){
        if(list1?.val == null && list2?.val == null){
            break
        }
        if(list1?.val != null && list2?.val == null){
            mergeList.next = list1
            break
        } 
        if(list1?.val == null && list2?.val != null){
            mergeList.next = list2
            break
        }
        if(list1?.val != null && list2?.val != null){
            if(list1.val == list2.val){
                temp.next = list1
                list1 = list1.next
                temp = temp.next
                temp.next = list2
                list2 = list2.next
                temp = temp.next
                temp.next = null
            }
            else if (list1.val < list2.val){
                temp.next = list1
                list1 = list1.next
                temp = temp.next
                temp.next = null
            }
            else{ //list2 < list1
                temp.next = list2
                list2 = list2.next
                temp = temp.next
                temp.next = null
            }

        }
    }

    return mergeList
};