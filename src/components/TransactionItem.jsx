// 거래 한 건을 나타내는 개별 아이템 컴포넌트
import { formatCurrency } from '@/utils/features'
import React, { useState } from 'react'
import style from './TransactionItem.module.css'
import Modal from './Modal'

const TransactionItem = ({ transaction, onDelete }) => {
  const { description, amount, type, id } = transaction
  const sign = type === 'income' ? '+' : '-'
  const [showModal, setShowModal] = useState(false)

  const handleDeleteClick = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  const handleDeleteTransaction = () => {
    onDelete(id)
    setShowModal(false)
  }

  return (
    <>
      <div className={style.itemCon}>
        <span className={style.description}>{description}</span>
        <span className={style.amount} style={{ color: type === 'income' ? 'green' : 'red' }}>
          {sign} {formatCurrency(Math.abs(amount))}
        </span>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
      <Modal
        showModal={showModal}
        message="해당 거래를 삭제하시겠습니까?"
        onClose={handleCloseModal}
        onConfirm={handleDeleteTransaction}
        showButtons={true}
      />
    </>
  )
}

export default TransactionItem
