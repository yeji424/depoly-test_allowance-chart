import './App.css'

import Header from './components/Header'
import Balance from './components/Balance'
import Summary from './components/Summary'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Modal from './components/Modal'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="summary-area">
        <Balance />
        <Summary />
      </div>

      <div className="transaction-area">
        <TransactionForm />
        <TransactionList />
      </div>

      <Modal />
    </div>
  )
}

export default App
