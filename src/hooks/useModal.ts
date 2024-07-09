import { useState, useCallback } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []); 
  // The dependency array is empty, so openModal is memoized and will never change.

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []); 
  // The dependency array is empty, so closeModal is memoized and will never change.

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
