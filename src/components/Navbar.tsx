import './index.css'

interface IMenuItem {
  menuNo: number;
  menuName: string;
  displayYn: string;
  menuPath: string;
  sortNo: number;
  readYn: string;
  useYn: string;
  writeYn: string;
  parentMenuNo?: number | null;
}

interface IParams {
  menu: IMenuItem[];
}


function Navbar(params: IParams) {
  const { menu } = params
  return (
    <div className="navbar">
    </div>
  );
}

export default Navbar;
