import './index.css';
import { IMenuChild } from '../../../constants/nav-type';
import Children from './Children';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { actionSetSelectedMenu, selectSelectedMenu, selectOriginalMenuById } from '../../../store/authSlice';
import { useAppDispatch, useAppSelector } from 'store';

interface IParams {
  data: IMenuChild;
  currentPath: string;
}
function Child(params: IParams) {
  const dispatch = useAppDispatch();
  const { data, currentPath } = params;
  const [isShowingChildren, setIsShowingChildren] = useState(false);
  const selectedMenuNo = useAppSelector(selectSelectedMenu);

  useEffect(() => {
    if (currentPath === data.menuPath) dispatch(actionSetSelectedMenu(data.menuNo));
  }, [currentPath, data.menuNo, data.menuPath, dispatch]);

  return (
    <div
      className="child"
      onMouseEnter={() => {
        setIsShowingChildren(true);
      }}
      onMouseLeave={() => {
        setIsShowingChildren(false);
      }}
    >
      <Link
        to={data.menuPath}
        className={`nav-link ${selectedMenuNo.includes(data.menuNo) ? 'selected-item ' : ''} ${
          data.menuPath ? 'active' : 'disable'
        }`}
      >
        {data.menuName}{' '}
        {data.children.length !== 0 && (
          <div className="pl-1">
            <span className="k-icon k-font-icon k-i-arrow-chevron-right k-icon-xs" />
          </div>
        )}
      </Link>
      {!!data.children.length && (
        <div className={`${isShowingChildren ? 'show-children' : 'hidden-children'}`}>
          <Children children={data.children} isRoot={false} currentPath={currentPath} />
        </div>
      )}
    </div>
  );
}

export default Child;
