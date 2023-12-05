import './index.css';
import { IMenuItem } from '../../../constants/nav-type';
import Children from './Children';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { actionResetSelectedMenu, selectSelectedMenu } from 'store/authSlice';

interface IParams {
  menu: IMenuItem[];
}

function Navlink(params: IParams) {
  const dispatch = useAppDispatch();
  const { menu } = params;
  const selectedMenuNo = useAppSelector(selectSelectedMenu);
  const location = useLocation();
  const [isShowingChildren, setIsShowingChildren] = useState(true);

  const handleNavlinEnter = () => {
    setIsShowingChildren(true);
  };

  useEffect(() => {
    if (menu.find((item) => location.pathname === item.menuPath)) dispatch(actionResetSelectedMenu());
    setIsShowingChildren(false);
  }, [dispatch, location.pathname, menu]);

  return (
    <div className="navbar">
      {menu.length !== 0 &&
        menu.map((item: any) => (
          <div className="root-nav-item-container" key={item.menuNo} onMouseEnter={handleNavlinEnter}>
            <Link
              to={item.menuPath}
              className={`root-nav-item ${
                selectedMenuNo.includes(item.menuNo) || location.pathname === item.menuPath ? 'selected-item' : ''
              } ${item.menuPath ? 'active' : 'disable'}`}
            >
              {item.menuName}
            </Link>
            <div className={`${isShowingChildren ? '' : 'hide'}`}>
              <Children children={item.children} currentPath={location.pathname} isRoot />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Navlink;
