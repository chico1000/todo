import React, { useEffect, useState } from 'react';

import './Modal.css';
import { CloseModalIcon } from './CloseModalIcon';

export const CommonModal = ({
  size,
  isOpen,
  onClose,
  children,
  title = "",
  width = "",
  padding = "10px",
  description,
  className,
  ...props
}) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Delay unmounting for smooth closing animation
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, visible]);

  if (!visible) return null;

  return (
    <>
      <div
        className={`common-modal-backdrop ${isOpen ? "open" : ""} ${className}`}
        onClick={onClose}
      />
      <div
        className={`common-modal ${isOpen ? "open" : ""} common-modal__${size}`}
        style={{ width, padding }}
        {...props}
      >
        <div
          className={`common-modal-header ${
            !title ? "common-modal-hide-underline" : ""
          }`}
        >
          <div>
            {title && <h4 className="common-modal-header__title">{title}</h4>}
            {description && (
              <p className="common-modal-header__description">{description}</p>
            )}
          </div>
          <CloseModalIcon onClick={onClose} />
        </div>
        <div className="common-modal-body">{children}</div>
      </div>
    </>
  );
};