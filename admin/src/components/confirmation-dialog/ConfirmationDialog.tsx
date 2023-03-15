import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from "@chakra-ui/react";
import { ReactNode, RefObject, useRef } from "react";


export interface ConfirmationDialogProps {
  heading:string  | null,
  children:ReactNode,
  confirm?:{ colorScheme:string, text:string },
  cancel?:{ colorScheme:string, text:string },
  isOpen:boolean,
  onClose:()=>void,
}

export const ConfirmationDialog = (props:ConfirmationDialogProps) => {
  const { heading, children, isOpen, onClose, confirm, cancel } = props;
  const cancelRef = useRef() as RefObject<any>
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              { heading }
            </AlertDialogHeader>
            <AlertDialogBody>
              { children }
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} colorScheme={cancel ? cancel.colorScheme : 'red'}>
                {cancel ? cancel.text : 'Cancel'}
              </Button>
              <Button colorScheme={confirm ? confirm.colorScheme : 'green'} ml={3}>
                {confirm ? confirm.text : 'Confirm'}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}