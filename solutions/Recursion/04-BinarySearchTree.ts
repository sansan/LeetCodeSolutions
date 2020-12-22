import { TreeNode } from './definitions';

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if(!root) {
        return null;
    }

    if (root.val === val) {
        return root;
    }

    if(!root.left && !root.right) {
        return null;
    }

    return searchBST(root.left, val) || searchBST(root.right, val)
};

const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(searchBST(tree, 1))