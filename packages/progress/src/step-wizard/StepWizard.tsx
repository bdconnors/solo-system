import { ProgressProvider, useProgress } from "progress-provider";
import { ReactElement, ReactNode, useEffect} from "react";

export interface StepProps {
  children: ReactNode,
}

const Step = (props: StepProps) => {
  const { children } = props;
  return (<>{ children }</>);
};


export interface StepListProps {
  children: ReactElement<StepProps>[],
  active?:number
}

export const StepList = (props: StepListProps) => {
  const { children, active = 0 } = props;
  const [progress, update] = useProgress();
  useEffect(()=> {
    update({ active: active, total: children.length - 1 });
   },[])
  return children[progress.active];
};

StepList.Step = Step;

export interface StepWizardProps {
  children: ReactNode,
}

export const StepWizard = (props: StepWizardProps) => {
  const { children } = props;
  return (
    <ProgressProvider>
      { children}
    </ProgressProvider>
  );
};