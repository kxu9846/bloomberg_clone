import React from 'react';
import './quickLinksBar.css'
import {LinkButton} from '../../stories/Button.stories'

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
        <div className="div">
            <div className = "title">QuickLinks:</div>
            {quickLinksProps.map((item: any) => (
                <div key={item} className="item">
                    <LinkButton variant = "link" children= {item} />
                </div>
            ))}
        </div>
    )
}

export default QuickLinksBar