import React, {
  useEffect,
  useRef,
  useCallback,
  PropsWithChildren,
} from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface TModalProps extends PropsWithChildren {
  title: string;
  onClose: () => void;
}

const modalRoot = document.getElementById('modals');

const Modal: React.FC<TModalProps> = ({ onClose, children, title }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  const handleOverlayClick = useCallback(
    (e: MouseEvent) => {
      if (e.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;

    if (overlay) {
      overlay.addEventListener('click', handleOverlayClick);
      document.addEventListener('keydown', handleEscapeKey);
      overlay.focus();
    }

    return () => {
      if (overlay) {
        overlay.removeEventListener('click', handleOverlayClick);
        document.removeEventListener('keydown', handleEscapeKey);
      }
    };
  }, [handleEscapeKey, handleOverlayClick]);

  return ReactDOM.createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-overlay flex items-center justify-center h-screen w-screen z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative mx-2">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-primary hover:text-primary cursor-pointer "
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center font-main text-hover">
          {title}
        </h2>
        {children}
      </div>
    </div>,
    modalRoot as HTMLDivElement
  );
};

export default React.memo(Modal);
