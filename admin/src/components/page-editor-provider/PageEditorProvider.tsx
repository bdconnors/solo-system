import React, { Context, createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

export interface IPageEditorState {
  page:Record<string, any> | null

}
export interface IPageEditorContext extends IPageEditorState {
  dispatch:Dispatch<any>
}
const PageEditorContext = createContext<IPageEditorContext>({ 
  page:null,
  dispatch:(action:any)=>{}
});

export const PageEditorReducer = (state:IPageEditorState, action:any) => {
  switch(action.type) {
    case 'SET_PAGE':
      return { page: action.payload }
    case 'EDIT':
      return { page: { ...state.page, ...action.payload } }
    default:
      throw new Error()
  }
}

export interface PageEditorProviderProps {
  children:ReactNode
}

export const PageEditorProvider= (props:PageEditorProviderProps) => {
  const { children } = props;
  const [state, dispatch] = useReducer(PageEditorReducer, { page:null });
  return (
    <PageEditorContext.Provider value={{ page:state.page, dispatch: dispatch }}>
      {children}
    </PageEditorContext.Provider>
  )
}

export const usePageEditor = (ctx?:Context<IPageEditorContext>) => {
  const context: IPageEditorContext = useContext(ctx ? ctx : PageEditorContext);
  if(!context){
    throw new Error('usePageEditor must be used within a PageEditorProvider or provide the initial context')
  }
  return context;
}

