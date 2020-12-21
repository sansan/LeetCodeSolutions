class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function swapPairs(head: ListNode | null): ListNode | null {

  if(head === null) {
      return null;
  }

  if(head.next === null) {
      return head;
  }

  const currentVal = head.val;
  head.val = head.next.val;
  head.next.val = currentVal;

  if(head.next?.next){
      swapPairs(head.next?.next);
  }

  return head;
};

export default ListNode;

const newList = new ListNode(1, new ListNode(2, null));

console.log(swapPairs(newList))