// 거래 목록 전체 렌더링하는 컴포넌트
import React, { useEffect, useState } from 'react'
import { getTransactions, deleteTransaction } from '@/utils/storage'
import TransactionItem from './TransactionItem'
import style from './TransactionList.module.css'
const TransactionList = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const storedTransactions = getTransactions()
    setTransactions(storedTransactions)
  }, [])

  const handleDelete = id => {
    deleteTransaction(id)
    setTransactions(getTransactions())
  }
  return (
    <div className={style.listCon}>
      {transactions.map(transaction => (
        <TransactionItem key={transaction.id} transaction={transaction} onDelete={handleDelete} />
      ))}
    </div>
  )
}

export default TransactionList
