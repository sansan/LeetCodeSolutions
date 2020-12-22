import { TreeNode } from './definitions';

const tree = new TreeNode(0, new TreeNode(1, new TreeNode(2)), new TreeNode(3));

console.log(tree);

function maxDepth(root: TreeNode | null): number {
    if(!root) {
        return 0;
    }

    if(!root.left && !root.right) {
        return 1;
    }

    const leftCount =  root.left ? 1 + maxDepth(root.left) : 0;
    const rightCount = root.right ? 1 + maxDepth(root.right) : 0;



    return Math.max(leftCount, rightCount);

};

console.log(maxDepth(tree));