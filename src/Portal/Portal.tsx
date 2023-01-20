import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  elements?: HTMLElement;
  children: ReactNode;
}

export const Portal = (props: PortalProps) => {
  const { children, elements = document.body } = props;

  return createPortal(children, elements);
};
