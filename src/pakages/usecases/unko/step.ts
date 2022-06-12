import { Board } from "../../domains/board";
import { StepUnko } from "../../domains/unko";

export const stepUnko: StepUnko = (board: Board, id: number) => {
  const newElements = board.elements.map((elem) => {
    if (elem.id === id) {
      return {
        ...elem,
        isStepped: true,
      };
    }
    return elem;
  });

  return {
    ...board,
    elements: newElements,
  };
};
