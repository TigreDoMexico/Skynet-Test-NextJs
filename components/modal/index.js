import { useState, useEffect } from 'react';
import style from '../../styles/Components.module.css'

const Modal = ({ isShowing, toggle, children }) => {
    let container;
    if (typeof window !== 'undefined') {
        const rootContainer = document.createElement('div');
        const parentElem = document.querySelector('#__next');
        parentElem.appendChild(rootContainer);
        container = rootContainer;
    }

    useEffect(() => {
        const listner = function (e) {
            if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
                e.preventDefault();
                e.stopPropagation();

                isShowing && toggle();
            }
        }

        window.addEventListener('keyup', listner)

        return (() => {
            window.removeEventListener('keyup', listner)
        })
    }, [isShowing, toggle])

    return (
        isShowing ?
            (
                <>
                    <div className={style.modalOverlay} onClick={toggle}>
                    </div>
                    <div className={style.modalWrapper}>
                        <div className={style.modal}>
                            {children}
                        </div>
                    </div>
                </>

            ) : null
    )
}


export const ModalHeader = ({ toggle, children }) => (
    <div className={style.modalHeader}>
        {children || 'Title'}
        <button
            className={style.modalButtonClose}
            data-dismiss="modal"
            aria-label="Close"
            onClick={toggle}
        >
            &times;
    </button>
    </div>
)

export const ModalBody = ({ children }) => (
    <div className={style.modalBody}>
        {children}
    </div>
)

export const ModalFooter = ({ children }) => (
    <div className={style.modalFooter}>
        {children}
    </div>
)

export const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
}

export default Modal;