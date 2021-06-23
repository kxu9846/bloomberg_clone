import React, { useState, useEffect } from 'react'
import './Stockpage.css'
import axios from 'axios'

interface props {
    symbol : string
}

const SYMBOL = "AAPL"
const TOKEN = "pk_c22b341d1ed4455c9d82f2c28cf214aa"
const API_URL = `https://cloud.iexapis.com/stable/stock/${SYMBOL}/quote/?token=${TOKEN}`

function Stockpage(props: props) {
    const [financials, setFinancials] = useState(
        {
            companySymbol: '',
            companyName: '',
            currentPrice: 0,
            open: 0,
            prevClose: 0,
            volume: 0,
            marketCap: 0,
        }
    )

    const getData = async () => {
        let result = await axios.get(API_URL)
            .then(result => {
                setFinancials({
                    companySymbol: result.data.symbol,
                    companyName: result.data.companyName,
                    currentPrice: result.data.latestPrice,
                    open: result.data.iexOpen,
                    prevClose: result.data.previousClose,
                    volume: result.data.volume,
                    marketCap: result.data.marketCap,
                })
            })
            .catch(err => {
            console.log(err)
        }
        )
        return result
    }

    useEffect(() => {
        getData()
    })

    return (
        <div className="stockpage-container">
            <div className="financials">
                <div className = "companySymbol">
                    {financials.companySymbol}
                </div>
                <div className = "companyName">
                    {financials.companyName}
                </div>
                <div className = "currentPrice">
                    {financials.currentPrice}
                </div>
                <div className = "key-stats">
                    <div className="stat">
                        <div className= "stat-title">Open:</div>
                        {financials.open}
                    </div>
                    <div className="stat">
                        <div className= "stat-title">Previous Close:</div>
                        {financials.prevClose}
                    </div>
                    <div className="stat">
                        <div className= "stat-title">Volume:</div>
                        {financials.volume}
                    </div>
                    <div className="stat">
                        <div className= "stat-title">Market Cap:</div>
                        {financials.marketCap}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stockpage