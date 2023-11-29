import './index.css';
import { IMenuChild } from '../constant/nav-type';
import Children from './Children';
import { useEffect, useState } from 'react';

interface IParams {
  data: IMenuChild;
  currentPath: string;
  handleParentSelected: any;
}
function Child(params: IParams) {
  const { data, currentPath, handleParentSelected } = params;
  const [isShowingChildren, setIsShowingChildren] = useState(false);
  const [selectedParentNo, setSelectedParentNo] = useState(0);

  useEffect(() => {
    if (currentPath === data.menuPath) {
      handleParentSelected(data.parentMenuNo);
    }
  }, [currentPath, data.menuPath, data.parentMenuNo, handleParentSelected]);

  useEffect(() => {
    if (selectedParentNo === data.menuNo) handleParentSelected(data.parentMenuNo);
  }, [data.menuNo, data.parentMenuNo, handleParentSelected, selectedParentNo]);

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
      <a
        href={data.menuPath}
        className={`${selectedParentNo === data.menuNo || currentPath === data.menuPath ? 'selected-item ' : ''} ${
          data.menuPath ? 'active' : 'disable'
        }`}
      >
        {data.menuName}
      </a>
      {!!data.children.length && isShowingChildren && (
        <Children
          children={data.children}
          isRoot={false}
          currentPath={currentPath}
          setSelectedParentNo={setSelectedParentNo}
        />
      )}
    </div>
  );
}

export default Child;
