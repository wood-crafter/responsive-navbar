export interface IMenuItem {
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

export interface IMenuChild {
  menuNo: number;
  menuName: string;
  displayYn: string;
  menuPath: string;
  sortNo: number;
  readYn: string;
  useYn: string;
  writeYn: string;
  parentMenuNo: number;
  children: IMenuChild[];
}