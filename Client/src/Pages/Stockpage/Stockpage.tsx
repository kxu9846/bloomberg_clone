import React, { useState, useEffect } from 'react'
import './Stockpage.css'
import axios from 'axios'

interface props {
    symbol : string
}

const TOKEN = "pk_c22b341d1ed4455c9d82f2c28cf214aa"
const api_url = `https://cloud.iexapis.com/stable/stock/aapl/quote/?token=${TOKEN}`

function Stockpage(props: props) {
    const [financials, setFinancials] = useState(
        {
            companySymbol: '',
            companyName: '',
            open: 0,
            prevClose: 0,
            volume: 0,
            marketCap: 0,
        }
    )


    const getData = async () => {
        let result = await axios.get(api_url)
            .then(result => {
                setFinancials({
                    companySymbol: result.data.symbol,
                    companyName: result.data.companyName,
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
            <div className = "financials">
                {financials.companySymbol}
                {financials.companyName}
                {financials.open}
                {financials.prevClose}
                {financials.volume}
                {financials.marketCap}
            </div>
        </div>
    )
}

export default Stockpage