// 로컬스토리지 get, set, delete 함수 정의
const TRANSACTIONS_KEY = 'transactions'
const LAST_ID_KEY = 'lastId'

export const getTransactions = () => {
  const transactions = JSON.parse(localStorage.getItem(TRANSACTIONS_KEY))
  return transactions ? transactions : []
}

export const saveTransaction = transaction => {
  const transactions = getTransactions()
  transactions.push(transaction)
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions))
}

export const deleteTransaction = id => {
  let transactions = getTransactions()
  transactions = transactions.filter(transaction => transaction.id !== id)
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions))
}

export const getLastId = () => {
  return parseInt(localStorage.getItem(LAST_ID_KEY) || '0', 10)
}

export const setLastId = id => {
  localStorage.setItem(LAST_ID_KEY, id.toString())
}
