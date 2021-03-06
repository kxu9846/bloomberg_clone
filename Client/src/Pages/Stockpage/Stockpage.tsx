import React, { useState, useEffect } from 'react'
import './Stockpage.css'
import axios from 'axios'
import { TOKEN } from '../../token'

interface props {
    symbol: string,
    match: any,
    path: string
    
}

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

    const SYMBOL = props.match.path.slice(1).toUpperCase()
    const API_URL = `https://sandbox.iexapis.com/stable/stock/${SYMBOL}/quote/?token=${TOKEN}`


    const getData = async () => {
        let result = await axios.get(API_URL)
            .then(result => {
                console.log(result.data)
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
        const intervalId = setInterval(() => {
            getData()
        }, 5000)
        
        return () => clearInterval(intervalId)
    }, [props])

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
            <div className ="stockpage-video">
                <span>stock video goes here</span>
            </div>
        </div>
    )
}

export default Stockpage