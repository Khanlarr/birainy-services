
import { IService, TreeNode } from "../interfaces/services";



export function buildTree(data: IService[]): TreeNode[] {
    const idMap = new Map<number, TreeNode>();
    const tree: TreeNode[] = [];

    data.forEach(item => {
        idMap.set(item.id, { ...item, children: [] });
    });

    data.forEach((item: IService) => {
        if (item.parent_id !== null) {
            const parent = idMap.get(item.parent_id);
            if (parent) {
                parent.children.push(idMap.get(item.id)!);
            }
        } else {
            tree.push(idMap.get(item.id)!);
        }
    });

    return tree;
}
