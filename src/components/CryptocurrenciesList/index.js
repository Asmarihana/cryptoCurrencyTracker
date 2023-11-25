import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {blogsData} = this.props
    return (
      <div className="card">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-img"
        />
        <div className="table">
          <div className="head">
            <div>
              <h1>Coin Type</h1>
            </div>
            <div className="currency-list">
              <h1 className="currency">USD</h1>
              <h1 className="currency">EURO</h1>
            </div>
          </div>
          <ul>
            {blogsData.map(each => (
              <CryptocurrencyItem details={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
