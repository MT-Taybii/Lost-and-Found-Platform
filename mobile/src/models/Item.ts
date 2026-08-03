export interface Item {
  id: string;
  itemName: string;
  description: string;
  location: string;
}

export interface LostItem extends Item {
  ownerName: string;
}

export interface FoundItem extends Item {
  finderName: string;
}
