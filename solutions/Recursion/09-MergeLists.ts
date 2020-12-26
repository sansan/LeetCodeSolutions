class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(!l1 && !l2) {
        return null;
    }

    if(!l1) {
        return l2;
    }

    if(!l2) {
        return l1;
    }
    
    if(l1.val === l2.val){
        return new ListNode(l1.val, new ListNode(l2.val, mergeTwoLists(l1.next, l2.next)));
    }

    if(l1.val < l2.val){
        return new ListNode(l1.val, mergeTwoLists(l1.next, l2));
    }

    if(l1.val > l2.val) {
        return new ListNode(l2.val, mergeTwoLists(l1, l2.next));
    }
};

const firstList = new ListNode(1, new ListNode(2, new ListNode(4)));
const secondList = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(firstList, secondList));