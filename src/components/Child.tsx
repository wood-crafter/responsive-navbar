import './index.css'
import { IMenuChild } from '../constant/nav-type'
import Children from './Children'
import { useState } from 'react'

interface IParams {
  data: IMenuChild
}
function Child(params: IParams) {
  const { data } = params
  const [isShowingChildren, setIsShowingChildren] = useState(false)
  return (
    <div className="child" onMouseEnter={() => {setIsShowingChildren(true)}} onMouseLeave={() => {setIsShowingChildren(false)}}>
      <a href={data.menuPath} className={`${data.menuPath ? 'active' : 'disable'}`}>{data.menuName}</a>
      {!!data.children.length && isShowingChildren && <Children children={data.children} isRoot={false}/>}
    </div>
  );
}

export default Child;
