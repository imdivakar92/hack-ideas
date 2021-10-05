import { Tag } from "./Tag";

export interface Challenge {
  id: number;
  title: string;
  description: string;
  tags: Tag[];
  createdBy: number;
  createdDate: Date;
}