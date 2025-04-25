// 총 잔액
import { calculate } from '@/utils/calculate'
import { formatCurrency } from '@/utils/features'
import { getTransactions } from '@/utils/storage'
import React, { useEffect, useState } from 'react'
import style from './Balance.module.css'

const Balance = () => {
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const transactions = getTransactions()
    const { balance } = calculate(transactions)
    setBalance(balance)
  }, [])

  return (
    <div className={`con ${style.balanceCon}`}>
      <h2>잔액</h2>
      <span>{formatCurrency(balance)}</span>
    </div>
  )
}

export default Balance
