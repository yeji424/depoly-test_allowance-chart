// 거래 내용을 입력 및 추가하는 폼 컴포넌트
import { getLastId, saveTransaction, setLastId } from '@/utils/storage'
import React, { useState } from 'react'
import style from './TransactionFrom.module.css'
import Modal from './Modal'

const TransactionForm = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')

  const [isLoading, setIsLoading] = useState(false)

  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  const handleAddTransaction = () => {
    if (description.trim().length < 2 || !amount) {
      setModalMessage('내용을 2글자 이상 입력하고 금액을 입력해주세요.')
      setShowModal(true)
      return
    }

    const lastId = getLastId()
    const newId = lastId + 1

    const newTransaction = {
      id: newId,
      description,
      amount: parseInt(amount),
      type,
      date: new Date().toISOString().slice(0, 10),
    }

    saveTransaction(newTransaction)
    setLastId(newId)

    // 초기화
    setDescription('')
    setAmount('')
    setType('income')

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      window.location.reload()
    }, 1000)
  }

  return (
    <div className={style.formCon}>
      <input
        type="text"
        placeholder="거래 내용"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <div className={style.radioGroup}>
        <label>
          <input
            type="radio"
            name="type"
            value="income"
            checked={type === 'income'}
            onChange={() => setType('income')}
          />
          <span>수입</span>
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="expense"
            checked={type === 'expense'}
            onChange={() => setType('expense')}
          />
          <span>지출</span>
        </label>
      </div>
      <input
        type="number"
        placeholder="거래 금액"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button className={style.addBtn} onClick={handleAddTransaction}>
        거래 추가
      </button>
      {showModal && (
        <Modal showModal={showModal} message={modalMessage} onClose={() => setShowModal(false)} />
      )}
      {isLoading && (
        <div className="spinnerCon">
          <div className="spinner" />
        </div>
      )}
    </div>
  )
}

export default TransactionForm
