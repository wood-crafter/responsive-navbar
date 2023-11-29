import './index.css';
import { IMenuChild } from '../constant/nav-type';
import Child from './Child';

interface IParams {
  children: IMenuChild[];
  isRoot: boolean;
  setSelectedParentNo: any;
  currentPath: string;
}
function Children(params: IParams) {
  const { children, isRoot, setSelectedParentNo, currentPath } = params;
  return children.length ? (
    <div className={`${isRoot ? 'root-children' : 'children'}`}>
      {children.map((item) => (
        <Child key={item.menuNo} data={item} currentPath={currentPath} handleParentSelected={setSelectedParentNo} />
      ))}
    </div>
  ) : (
    <div style={{ display: 'none' }}></div>
  );
}

export default Children;
