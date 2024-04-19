type NumberFormatterProps = {
  value?: string | number,
  digits?: number,
  options?: Intl.NumberFormatOptions
}

const NumberFormatter: React.FC<NumberFormatterProps> = ({
  value,
  digits,
  options,
}) => {
  if (value !== null && value !== undefined) {
    const formatter = Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
      ...options,
    })
    return formatter.format(Number(value))
  } else {
    return ''
  }
}

export default NumberFormatter
