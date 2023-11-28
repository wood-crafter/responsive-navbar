import './index.css'
import { IMenuChild } from '../constant/nav-type'
import Child from './Child'

interface IParams {
  children: IMenuChild[]
  isRoot: boolean
}
function Children(params: IParams) {
  const { children, isRoot } = params
  return (
    <div className={`${isRoot ? "root-children" : "children" }`}>
      {children.map(item => (
        <Child data={item}/>
      ))}
    </div>
  );
}

export default Children;
