import { IMenuItem } from '../constant/nav-type';

export const convertToTreeMenu = (menu: IMenuItem[]) => {
  let result;
  const notOrphanMenu = removeOrphan(menu);
  try {
    result = listToTree(notOrphanMenu);
    return result;
  } catch (error) {
    return;
  }
};

const listToTree = (menus: any) => {
  if (menus.length === 0) return;
  let map: any = {},
    node,
    roots = [],
    i;

  for (i = 0; i < menus.length; i += 1) {
    map[menus[i].menuNo] = i;
    // eslint-disable-next-line no-param-reassign
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
};

const removeOrphan = (menus: any) => {
  return menus.filter((item: any) => {
    return !!menus.find((menu: any) => !item.parentMenuNo || menu.menuNo === item.parentMenuNo);
  });
};
