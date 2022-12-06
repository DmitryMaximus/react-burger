import React from "react";
import ReactDOM from "react-dom";
import styles from './modal.module.css'
import ModalOverlay from "./modal-overlay/modal-overlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const Modal = ({children, header, onClose}) => {
    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClose={onClose}/>
            <div className={`pt-10 pl-10 pr-10 pb-15 ${styles.modal}`}>
                <div className={styles.modalHeader}>
                    <p className={'text text_type_main-large'}>{header}</p>
                    <div className={styles.icon}>
                        <CloseIcon onClick={onClose} type={'primary'}/>
                    </div>
                </div>
                {children}
            </div>
        </>
        , document.getElementById('react-modals'));
}
Modal.propTypes = {
    children: PropTypes.element.isRequired,
    header: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal;