import { CSSProperties, FC, ReactNode, useRef } from 'react';
import { Transition } from 'react-transition-group';

const containerStyle:CSSProperties= { 
  position: 'fixed', 
  zIndex: 1, 
  left: 0, 
  right: 0, 
  top: 0, 
  bottom: 0, 
  width: '100px', 
  height: '100px', 
  margin: 'auto' 
};

export interface LoadingScreenProps {
  spinner:ReactNode,
  timeout?:number,
  loading:boolean,
  children: ReactNode
}


export const LoadingScreen:FC<LoadingScreenProps> = (props:LoadingScreenProps) => {
  const { 
    spinner,
    timeout = 500,
    loading, 
    children
 } = props;

  const ref = useRef(null);

  return( 
    <Transition nodeRef={ref} in={!loading} timeout={timeout}>
      {loading ? 
        <div style={containerStyle}>
          { spinner }
        </div> : children 
      }
    </Transition>
  )
}