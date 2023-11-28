import { IMenuItem } from "../constant/nav-type"

export const convertToTreeMenu = (menu: IMenuItem[]) => {
  let result
  try {
    result = list_to_tree(menu)
    return result
  } catch (error) {
    return
  }
}

const list_to_tree = (menus: any) => {
  if (menus.length === 0) return
  let map: any = {}, node, roots = [], i;

  for (i = 0; i < menus.length; i += 1) {
    map[menus[i].menuNo] = i;
    menus[i].children = [];
  }

  for (i = 0; i < menus.length; i += 1) {
    node = menus[i];
    if (node.parentMenuNo) {
      menus[map[node.parentMenuNo]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}