import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/react';
import React from 'react';

const ConfirmModal = ({ isOpen, onClose, title, subTitle, onClickFunction }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{subTitle}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            취소
          </Button>
          <Button variant="ghost" onClick={onClickFunction}>
            삭제
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default ConfirmModal;
