class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// N, 1, 2, 3
// 3, 2, 1, N

function reverseList(head: ListNode | null): ListNode | null {
    if(!head || !head.next) {
        return head;
    }

    let temp = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return temp;
};

const newList = new ListNode(0, new ListNode(1, new ListNode(2, null)));

console.log(reverseList(newList));
