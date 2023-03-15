import React, { Context, createContext, ReactNode } from 'react';
import { IProgressContext, makeProgressState, progressReducer } from './context';

export const ProgressContext:Context<IProgressContext> = createContext<IProgressContext>([
 {
    active: 0,
    total: 0,
    progress: 0,
    isFirst: true,
    isLast: true,
  },
  ()=>{}
]);

export interface ProgressProviderProps {
  children:ReactNode,
  active?: number,
  total?: number,
}

export const ProgressProvider: React.FC<ProgressProviderProps> = (props:ProgressProviderProps) => {
  const { active = 0, total = 0, children } = props;

  const initialState = makeProgressState(active, total);

  const [state, dispatch] = React.useReducer(progressReducer, initialState);

  return (
    <ProgressContext.Provider value={[state, dispatch]}>
      { children }
    </ProgressContext.Provider>
  );
};

export const useProgress = (ctx?:Context<IProgressContext>):IProgressContext => {
  const context: IProgressContext = React.useContext(ctx ? ctx : ProgressContext);
  if(!context){
    throw new Error('useProgress must be used within a ProgressProvider or provide the initial context')
  }
  return context;
};