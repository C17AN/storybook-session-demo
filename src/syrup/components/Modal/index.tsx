import { AnimatePresence, Variants } from "framer-motion";
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";
import React from "react";
import Text from "../Text";
import "./modal.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const animationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  slideIn: {
    opacity: 1,
    y: 0,
  },
  dimmerFadeOut: {
    opacity: 0,
  },
  dimmerFadeIn: {
    opacity: 1,
  },
};

const Modal = ({
  title,
  open,
  onClose,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={animationVariants}
          animate={"dimmerFadeIn"}
          initial={"dimmerFadeOut"}
          exit={"dimmerFadeOut"}
          className="modal__background-dimmer"
          onClick={onClose}
        >
          <motion.div
            variants={animationVariants}
            animate={"slideIn"}
            initial={"initial"}
            exit={"initial"}
            className="modal__container"
          >
            {title && <h2 className="modal__title">{title}</h2>}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
