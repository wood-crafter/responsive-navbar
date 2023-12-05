import './index.css';
import { IMenuChild } from '../../../constants/nav-type';
import Child from './Child';

interface IParams {
  children: IMenuChild[];
  isRoot: boolean;
  currentPath: string;
  isForceClose?: boolean;
}
function Children(params: IParams) {
  const { children, isRoot, currentPath } = params;
  return children.length ? (
    <div className={`${isRoot ? 'root-children' : 'children'}`}>
      {children.map((item) => (
        <Child key={item.menuNo} data={item} currentPath={currentPath} />
      ))}
    </div>
  ) : (
    <div style={{ display: 'none' }}></div>
  );
}

export default Children;
