interface CategoryItem {
  name: string;
  selected: boolean;
}

interface Categories {
  [category: string]: CategoryItem[];
}

export interface IData {
  categories: Categories;
}
