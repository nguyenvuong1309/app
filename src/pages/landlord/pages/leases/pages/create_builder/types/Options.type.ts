import { ReactNode } from "react";

export type Options = {
  title?: ReactNode;
  content?: ReactNode;
  confirmationText?: ReactNode;
  cancellationText?: ReactNode;
  onClose?: () => void;
  onConfirm?: () => Promise<void> | void;
};
