import { useCallback, useState } from 'react';
import { Modal } from './Modal/Modal';
import cls from './App.module.css';
import { ModalOne } from './ModalOne/ModalOne';
import { ModalSecond } from './ModalSecond';
import { ModalThird } from './ModalThird';

export const App = () => {
  const [opened, setOpened] = useState(false);

  const onModalOpen = () => {
    setOpened(true);
  };

  const onModalClose = useCallback(() => {
    setOpened(false);
  }, []);

  return (
    <>
      <button className={cls.button} onClick={onModalOpen}>
        open complex animation modal
      </button>
      {/* <Modal opened={opened} onClose={onModalClose}>
        <h2>Complex animation content</h2>
      </Modal> */}
      {/* <ModalOne opened={opened} onClose={onModalClose}>
        <h2>Complex animation content</h2>
      </ModalOne> */}
      {/* <ModalSecond opened={opened} onClose={onModalClose}>
        <h2>Complex animation content</h2>
      </ModalSecond> */}
      <ModalThird opened={opened} onClose={onModalClose}>
        <h2>Complex animation content</h2>
      </ModalThird>
    </>
  );
};
