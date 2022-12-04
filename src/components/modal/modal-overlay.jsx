import styles from './model-overlay.module.css'
import {useEffect} from "react";

const ModalOverlay = ({ onClose }) => {

    return (
        <div className={styles.overlay} onClick={onClose}>
        </div>
    )
}

export default ModalOverlay;