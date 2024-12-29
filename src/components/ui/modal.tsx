import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Column, Row } from '../layout'

type ModalProps = {
  title: string
  description: string
  trigger: React.ReactNode
  children: React.ReactNode
  onClose?: () => void
  onSubmit?: () => void
  disabled?: boolean
}

const Modal = (props: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription>{props.description}</DialogDescription>
        </DialogHeader>
        <Column className="w-full" grow wGrow>
          {props.children}
        </Column>
        <DialogFooter>
          <Row grow y="center" className="gap-4">
            {props.onClose && <Button onClick={props.onClose}>Cancel</Button>}
            {props.onSubmit ? (
              <Button type="submit" disabled={props.disabled || false}>
                Save changes
              </Button>
            ) : (
              ''
            )}
          </Row>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
