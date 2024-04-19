import React from 'react'
import ReactDOM from 'react-dom/client'
// import {CurrencyInput} from './CurrencyInput.tsx'
import CurrencyTextfield from './CurrencyInput'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CurrencyTextfield />
  </React.StrictMode>,
)
