import { Size } from "../../domains/Size/size";
import { Board, CreateBoard } from "../../domains/board";

export const createBoard: CreateBoard = (size: Size) => {
  const board: Board = {
    size,
    elements: [],
  }
  return board;
};
