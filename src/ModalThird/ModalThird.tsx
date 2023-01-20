import { memo, MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from '../Portal';

import cls from './ModalThird.module.css';

interface ModalThirdProps {
  children: ReactNode;
  opened: boolean;
  onClose: () => void;
}

const overlayAnimation = {
  enter: cls.overlayEnter,
  enterActive: cls.overlayEnterActive,
  exit: cls.overlayExit,
  exitActive: cls.overlayExitActive,
};

const contentAnimation = {
  enter: cls.contentEnter,
  enterActive: cls.contentEnterActive,
  exit: cls.contentExit,
  exitActive: cls.contentExitActive,
};

export const ANIMATION_TIME = 500;

export const ModalThird = memo((props: ModalThirdProps) => {
  const { children, opened, onClose } = props;
  const [animationIn, setAnimationIn] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (opened) {
      setAnimationIn(true);
    } else {
      timerRef.current = setTimeout(() => {
        setAnimationIn(false);
      }, ANIMATION_TIME);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [opened]);

  if (!opened && !animationIn) return null;

  return (
    <Portal>
      <div className={cls.container}>
        <CSSTransition
          in={opened && animationIn}
          timeout={ANIMATION_TIME}
          mountOnEnter
          unmountOnExit
          classNames={overlayAnimation}
        >
          <div className={cls.overlay} onClick={onClose} />
        </CSSTransition>

        <CSSTransition
          in={opened && animationIn}
          timeout={ANIMATION_TIME}
          mountOnEnter
          unmountOnExit
          classNames={contentAnimation}
        >
          <div className={cls.content}>
            <button className={cls.btn} onClick={onClose}>
              X
            </button>
            {children}
          </div>
        </CSSTransition>
      </div>
    </Portal>
  );
});
