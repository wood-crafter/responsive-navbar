import './index.css'
import { convertToTreeMenu } from '../helper/convert-to-tree'
import { IMenuItem } from '../constant/nav-type';

interface IParams {
  menu: IMenuItem[];
}

function Navbar(params: IParams) {
  const { menu } = params
  const treeMenu = convertToTreeMenu(menu)
  if (!treeMenu) return (<div>Data error</div>)
  return (
    <div className="navbar">
      {treeMenu.length !== 0 && treeMenu.map((item: any) => (
        <div>{item.menuName}</div>
      ))}
    </div>
  );
}

export default Navbar;
