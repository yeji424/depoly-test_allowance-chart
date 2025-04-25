export const calculate = transactions => {
  let income = 0
  let expense = 0

  transactions.forEach(transaction => {
    if (transaction.type === 'income') income += transaction.amount
    else expense += transaction.amount
  })
  return {
    income,
    expense,
    balance: income - expense,
  }
}
