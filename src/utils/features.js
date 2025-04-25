export const formatCurrency = amount => {
  if (typeof amount !== 'number') return ''

  return `₩${amount.toLocaleString('ko-KR')}`
}
