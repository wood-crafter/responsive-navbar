import './index.css';
import { IMenuChild } from '../../../constants/nav-type';
import Child from './Child';

interface IParams {
  children: IMenuChild[];
  isRoot: boolean;
  currentPath: string;
  isForceClose?: boolean;
  setIsForceClose: any;
}
function Children(params: IParams) {
  const { children, isRoot, currentPath, isForceClose, setIsForceClose } = params;
  return children.length ? (
    <div className={`${isRoot ? 'root-children' : 'children'} ${isRoot && isForceClose ? 'force-close' : ''}`}>
      {children.map((item) => (
        <Child key={item.menuNo} data={item} currentPath={currentPath} setIsForceClose />
      ))}
    </div>
  ) : (
    <div style={{ display: 'none' }}></div>
  );
}

export default Children;
