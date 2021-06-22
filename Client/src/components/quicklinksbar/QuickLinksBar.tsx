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
    'Watchlist',
    'Wealth'
]

function QuickLinksBar() {
    return (
        <div className="quicklinks">
            <div className = "quicklinks-title">Quick Links:</div>
            {quickLinksProps.map((item: any) => (
                <div key={item} className="quicklinks-item">
                    <LinkButton variant = "link" children= {item} />
                </div>
            ))}
        </div>
    )
}

export default QuickLinksBar