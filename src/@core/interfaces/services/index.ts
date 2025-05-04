export interface ICard {
  id: number;
  title: string;
  content: string;
  image: string;
}

export interface IContent {
  id: number;
  title: string;
  content: string;
}

export interface IDataList {
  accordion: boolean;
  content: IContent[];
}

export interface IService {
  id: number;
  title: string;
  content: string;
  image?: string;
  iframe?: string; // optional, bəzi xidmətlərdə olmaya bilər
  cards?: ICard[]; // optional
  data_list?: IDataList; // optional
  parent_id: number | null; // nullable, bəzi xidmətlərdə `parent_id` olmayacaq
}

export interface TreeNode extends IService {
  children: TreeNode[];
}