import style from './Modal.module.css'

const Modal = ({ showModal, message, onClose, onConfirm, showButtons = false }) => {
  if (!showModal) return null
  return (
    <div className={style.modalOverlay}>
      <div className={style.modalBox}>
        <h3>{message}</h3>
        <div>
          <button onClick={onClose}>닫기</button>
          {showButtons && <button onClick={onConfirm}>삭제</button>}
        </div>
      </div>
    </div>
  )
}

export default Modal
