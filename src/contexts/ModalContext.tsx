import React, { createContext, useState, useContext, useCallback } from "react";
import { Modal } from "../components/ui/Modal";

interface ModalContextType {
  showModal: (title: string, content: React.ReactNode) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    content: null as React.ReactNode,
  });

  const showModal = useCallback((title: string, content: React.ReactNode) => {
    setModalState({ isOpen: true, title, content });
  }, []);

  const hideModal = useCallback(() => {
    setModalState((state) => ({ ...state, isOpen: false }));
  }, []);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <Modal
        isOpen={modalState.isOpen}
        onClose={hideModal}
        title={modalState.title}
      >
        {modalState.content}
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
