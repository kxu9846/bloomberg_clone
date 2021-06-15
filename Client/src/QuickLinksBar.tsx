import React from 'react';
import styles from './quickLinksBar.module.css'

const quickLinksProps = [
    'Commodities',
    'Stocks',
    'Rates & Bonds',
    'Currencies',
    'Futures',
    'Economics',
    'Fixed Income',
    'ETFs',
    'Sectors',
    'Wactchlist',
    'Wealth'
]


function QuickLinksBar() {
    return (
        <div className = {styles.div}>
            <div className = {styles.title}>QuickLinks:</div>
            {quickLinksProps.map((item: any) => (
                <div key={item} className = {styles.item}>{item}</div>
            ))}
        </div>
    )
}

export default QuickLinksBar