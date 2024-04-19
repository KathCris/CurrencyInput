import React, { KeyboardEvent } from 'react'
// import NumberFormatter from '../src/formatters/NumberFormatter.ts'
// import { Theme } from '@mui/material'
// import { makeStyles } from '@mui/styles'
// import TextField, { TextFieldProps } from './TextField'
// import {
//   NumberFormatter,
//   NumberFormatterRound,
//   NumberFormatterSimple,
//   StringUtils,
// } from '@incentive.me/generic/utils'

// const useStyles = () => ({
//   price: {
//     fontSize: 36,
//     lineHeight: 1,
//     fontWeight: 700,
//     // color: theme.palette.primary.main,
//     maxWidth: 250,

//     border: 'none',
//     // borderBottom: `1px solid ${theme.palette.text.disabled}`,
//   },
//   centerAlign: {
//     textAlign: 'center',
//   },
// })

type CurrencyTextfieldProps = {
  onlyInteger?: boolean
  onChange?: () => void
  defaultValue?: ''
}


const CurrencyTextfield: React.FC<CurrencyTextfieldProps> = ({
  // onlyInteger = true,
  onChange,
  defaultValue = '0,00',
  // value = 0,
  // ...props
}) => {
  const keepCursorInTheEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueLength = e.target.value
      ? String(e.target.value).length
      : String(defaultValue).length

    e.target.setSelectionRange(valueLength, valueLength)
  }

  const disableArrows = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault()
    }
  }

  return (
    <input
      // {...props}
      defaultValue={defaultValue}
      type="number"
      onChange={(e) => {
        keepCursorInTheEnd(e)

        // e.target.value = StringUtils.clear(e.target.value)

        // e.target.value = NumberFormatter(
        //   onlyInteger
        //     ? e.target.value.toString().slice(0, -3) +
        //         e.target.value.toString().slice(-1)
        //     : e.target.value.parseInt() / 100,
        //   2
        // )

        onChange
        // onChange && onChange(e)
      }}
      onFocus={keepCursorInTheEnd}
      // onClick={keepCursorInTheEnd}
      onKeyDown={disableArrows}
      onKeyUp={disableArrows}
    />
  )
}

export default CurrencyTextfield




// export function CurrencyInput() {
//   return (
//     <>
//       <h1>5tudo certo!</h1>
//     </>
//   )
// }
