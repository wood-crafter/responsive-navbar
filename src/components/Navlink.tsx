import './index.css';
import { IMenuItem } from '../constant/nav-type';
import Children from './Children';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface IParams {
  menu: IMenuItem[];
}

function Navlink(params: IParams) {
  const { menu } = params;
  const [selectedParentNo, setSelectedParentNo] = useState(0);
  const location = useLocation();

  return (
    <div className="navbar">
      {menu.length !== 0 &&
        menu.map((item: any) => (
          <div className="root-nav-item-container" key={item.menuNo}>
            <Link
              to={item.menuPath}
              className={`root-nav-item ${
                selectedParentNo === item.menuNo || location.pathname === item.menuPath ? 'selected-item' : ''
              } ${item.menuPath ? 'active' : 'disable'}`}
            >
              {item.menuName}
            </Link>
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
