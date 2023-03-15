import { Dispatch } from 'react';

export interface ProgressAction {
  total?: number,
  active?: number
}

export interface ProgressState {
  active: number,
  total: number,
  progress: number,
  isFirst: boolean,
  isLast: boolean,
}

export type IProgressContext = [ProgressState, Dispatch<ProgressAction>];

export const calculate = (active:number, total:number): number => {
  const decimal: number = (active / total);
  const rounded: number = Math.round(decimal * 10) / 10;
  const progress = (rounded * 100);
  return progress;
};

export const makeProgressState = (active:number, total:number): ProgressState => {
  const progress: number = calculate(active, total);
  const isFirst: boolean = active === 0;
  const isLast: boolean = active === total;
  return { active: active, total: total, progress: progress, isFirst: isFirst, isLast: isLast };
};

export const progressReducer = (state:ProgressState, action: ProgressAction): ProgressState => {
  let active = action.active ? action.active : state.active;
  let total = action.total ? action.total : state.total;

  if (active >= 0 && total >= active) {
    return makeProgressState(active, total);
  }else{
    throw new Error(`Invalid ProgressState. active is ${active}, total is ${total}`);
  }
};