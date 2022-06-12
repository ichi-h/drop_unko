import { Size } from "../Size/size";
import { Position } from "./position";
import { RotateSpeed } from "./rotateSpeed";

export type Unko = {
  id: number;
  position: Position;
  rotateSpeed: RotateSpeed;
  size: Size;
  isStepped: boolean;
};
