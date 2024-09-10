import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Modal({ isOpen, onClose, children }) {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="m-auto relative z-50 min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineCloseCircle
                onClick={onClose}
                className="text-3xl cursor-pointer"
              />
            </div>
            {children}
          </div>
          <div className="absolute top-0 z-40 h-screen w-screen backdrop-blur" />
        </>
      )}
    </>,
    document.getElementById('model-root')
  );
}

export default Modal;
