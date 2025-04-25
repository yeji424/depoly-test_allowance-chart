// 수입 지출 합계 요약
import { calculate } from '@/utils/calculate'
import { formatCurrency } from '@/utils/features'
import { getTransactions } from '@/utils/storage'
import React, { useEffect, useState } from 'react'
import style from './Summary.module.css'

const Summary = () => {
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    const transactions = getTransactions()
    const { income, expense } = calculate(transactions)

    setIncome(income)
    setExpense(expense)
  }, [])

  return (
    <div className={`con ${style.summaryCon}`}>
      <div className={style.incomeBox}>
        <h2>수입</h2>
        <p>{formatCurrency(income)}</p>
      </div>
      <div className={style.expenseBox}>
        <h2>지출</h2>
        <p> {formatCurrency(expense)}</p>
      </div>
    </div>
  )
}

export default Summary
