import './index.css';
import { convertToTreeMenu } from '../helper/convert-to-tree';
import { IMenuItem } from '../constant/nav-type';
import Children from './Children';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface IParams {
  menu: IMenuItem[];
}

function Navlink(params: IParams) {
  const { menu } = params;
  const [selectedParentNo, setSelectedParentNo] = useState(0);
  const treeMenu = convertToTreeMenu(JSON.parse(JSON.stringify(menu)));
  //TODO: add router
  const location = useLocation();

  if (!treeMenu) return <div></div>;
  return (
    <div className="navbar">
      {treeMenu.length !== 0 &&
        treeMenu.map((item: any) => (
          <div className="root-nav-item-container" key={item.menuNo}>
            <a
              href={item.menuPath}
              className={`root-nav-item ${
                selectedParentNo === item.menuNo || location.pathname === item.menuPath ? 'selected-item' : ''
              } ${item.menuPath ? 'active' : 'disable'}`}
            >
              {item.menuName}
            </a>
            <Children
              children={item.children}
              currentPath={location.pathname}
              isRoot
              setSelectedParentNo={setSelectedParentNo}
            />
          </div>
        ))}
    </div>
  );
}

export default Navlink;
