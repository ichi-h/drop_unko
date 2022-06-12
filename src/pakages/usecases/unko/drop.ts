import { Board } from "../../domains/board";
import { DropUnko, Unko } from "../../domains/unko";

export const dropUnko: DropUnko = (board: Board) => {
  const width = Math.random() * board.size.width;
  const height = Math.random() * board.size.height;
  const x = Math.random() * board.size.width;
  const y = Math.random() * board.size.height;
  const rotateSpeed = Math.random();

  const unko: Unko = {
    id: new Date().getTime(),
    isStepped: false,
    size: { width, height },
    position: { x, y },
    rotateSpeed,
  };

  return {
    ...board,
    elements: [...board.elements, unko],
  };
};
