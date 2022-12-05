import styles from './model-overlay.module.css'

const ModalOverlay = ({ onClose }) => {

    return (
        <div className={styles.overlay} onClick={onClose}>
        </div>
    )
}

export default ModalOverlay;