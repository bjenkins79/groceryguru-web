export type ToastActionElement = React.ReactNode;

export interface ToastProps {
  id?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
