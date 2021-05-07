export type ItemInfo = {
  title: string;
  date: string;
  key: number;
}

export type AddItem = (newItem: ItemInfo) => void;

export type DeleteItem = (item:ItemInfo) => void;

export type EditItem = (item:ItemInfo) => void;

export type ShowItem = (item:ItemInfo) => void;

