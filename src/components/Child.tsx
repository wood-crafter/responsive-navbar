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
  setIsForceClose?: any;
}
function Child(params: IParams) {
  const dispatch = useAppDispatch();
  const { data, currentPath, setIsForceClose } = params;
  const [isShowingChildren, setIsShowingChildren] = useState(false);
  const selectedMenuNo = useAppSelector(selectSelectedMenu);

  const handleLinkClick = (menuPath: string) => {
    if (menuPath) setIsForceClose(true);
  };
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
        onClick={() => {
          handleLinkClick(data.menuPath);
        }}
        to={data.menuPath}
        className={`nav-link ${selectedMenuNo.includes(data.menuNo) ? 'selected-item ' : ''} ${
          data.menuPath ? 'active' : 'disable'
        }`}
      >
        {data.menuName}{' '}
        {data.children.length !== 0 && (
          <div style={{ paddingLeft: '0.2rem' }}>
            <i className="arrow right"></i>
          </div>
        )}
      </Link>
      {!!data.children.length && (
        <div className={`${isShowingChildren ? 'show-children' : 'hidden-children'}`}>
          <Children children={data.children} isRoot={false} currentPath={currentPath} setIsForceClose />
        </div>
      )}
    </div>
  );
}

export default Child;
