import { useEffect, useMemo } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import { Paper } from '../Paper/Paper';

const modalRootEl = document.querySelector('#modal');

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ children, isOpen, onClose }: Props) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (isOpen) {
      modalRootEl?.appendChild(element);
      return () => {
        modalRootEl?.removeChild(element);
      };
    }
  });

  return createPortal(
    <div className={styles.backround} onClick={onClose}>
      <div className={styles.inner}>
        <Paper>{children}</Paper>
      </div>
    </div>,
    element
  );
};
