import './index.css'
import { IMenuChild } from '../constant/nav-type'
interface IParams {
  data: IMenuChild
}
function Child(params: IParams) {
  const { data } = params
  return (
    <div className="child">
      {data.menuName}
    </div>
  );
}

export default Child;
