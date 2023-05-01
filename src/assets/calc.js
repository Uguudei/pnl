function getPriceDecimals(price) {
    // Returns decimal count
    let base_price = Math.trunc(Math.abs(price));
    let decimals = base_price === 0 ? 0 : base_price.toString().length;
    let fractional = 4 - (decimals >= 4 ? 4 : decimals);
    return fractional;
}

function getRiskLevel(risk) {
    // Measures risk level of a trade
    // high risk = 10% up, medium risk = 5%-10%, low risk = 5% down
    if (risk < -0.1) {
        return 'high risk';
    } else if (risk <= -0.05) {
        return 'medium risk';
    } else {
        return 'low risk';
    }
}

function getTradeRating(r) {
    if (r >= 10) {
        return 'excellent trade';
    } else if (r > 6) {
        return 'good trade';
    } else if (r > 3) {
        return 'average trade';
    } else if (r <= 3) {
        return 'bad trade';
    }
}

export function calcPnl(position, entry, sl, tp, size = 1000, leverege = 10) {
    // Calculate profit & loss
    // Print config
    let decimals = getPriceDecimals(entry);

    let sign = { 'long': 1, 'short': -1 }
    let reward = (tp / entry - 1) * leverege * sign[position]
    let risk = (sl / entry - 1) * leverege * sign[position]
    let r = Math.abs(reward / risk)
    let profit = reward * size
    let loss = risk * size

    let liquidation = entry - entry / leverege * sign[position] * 0.9 * 0.98
    let breakeven = 1 / (1 + r)
    let riskLevel = getRiskLevel(risk)
    let tradeRating = getTradeRating(r)

    reward = (reward * 100).toFixed(1) + '%'
    risk = (risk * 100).toFixed(1) + '%'
    r = (r).toFixed(1)
    profit = Math.round(profit, 1).toFixed(1) + '$'
    loss = Math.round(loss, 1).toFixed(1) + '$'

    riskLevel = riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)
    tradeRating = tradeRating.charAt(0).toUpperCase() + tradeRating.slice(1)
    liquidation = liquidation.toFixed(decimals) + '$'
    breakeven = (breakeven * 100).toFixed(1) + '%'

    return { reward, risk, profit, loss, r, liquidation, breakeven, riskLevel, tradeRating, decimals }
}