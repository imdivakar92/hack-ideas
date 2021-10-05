import { Challenge } from "./Challenge";
import { Employee } from "./Employee";
import { Tag } from "./Tag";
import { Vote } from "./Vote";

export interface Data{
  employee: Employee[];
  tag: Tag[];
  challenge: Challenge[];
  vote: Vote[];
}