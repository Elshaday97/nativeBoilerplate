import {useState} from 'react';

const useModal = (): {
  isVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
} => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  return {isVisible, showModal, hideModal};
};

export default useModal;
