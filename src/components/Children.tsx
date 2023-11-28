import './index.css'
import { IMenuChild } from '../constant/nav-type';

interface IParams {
  children: IMenuChild[]
}
function Children(params: IParams) {
  const { children } = params
  return (
    <div className="children">
      Children
    </div>
  );
}

export default Children;
