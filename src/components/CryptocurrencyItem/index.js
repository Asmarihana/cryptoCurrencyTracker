import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = details
  return (
    <li className="list">
      <div className="logo-list">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p>{currencyName}</p>
      </div>
      <div className="currency-list">
        <p className="currency">{usdValue}</p>
        <p className="currency">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
