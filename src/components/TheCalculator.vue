<script setup>
import { ref } from 'vue';

function getPriceDecimals(price) {
  // Returns decimal count
  let base_price = Math.trunc(Math.abs(price));
  let decimals = base_price === 0 ? 0 : String(base_price).length;
  let fractional = 4 - (decimals >= 4 ? decimals : 4);
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

function calcPnl(position, entry, sl, tp, size = 1000, leverege = 10) {
  // Calculate profit & loss
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

  // Print config
  let decimals = getPriceDecimals(entry);
  // let align = 11 + (decimals === 0 ? 1 : decimals) - 2;
  return { reward, risk, profit, loss, r, liquidation, breakeven, riskLevel, tradeRating, decimals }
}

function long(entry, sl, tp, size = 1000, leverege = 10) {
  // Calculate longing risk and reward
  calcPnl('long', entry, sl, tp, size, leverege);
}

function short(entry, sl, tp, size = 1000, leverege = 10) {
  // Calculate shorting risk and reward
  calcPnl('short', entry, sl, tp, size, leverege);
}

const entry = ref(1000)
const stopLoss = ref(950)
const takeProfit = ref(1200)
const size = ref(1000)
const leverage = ref(10)

const reward = ref(0)
const risk = ref(0)
const profit = ref(0)
const loss = ref(0)
const rrr = ref(0)

const riskLevel = ref('')
const tradeRating = ref('')
const liquidation = ref(0)
const breakeven = ref(0)

function callPnl() {
  let result = calcPnl('long', entry.value, stopLoss.value, takeProfit.value, size.value, leverage.value)

  reward.value = result.reward
  risk.value = result.risk
  rrr.value = result.r
  profit.value = result.profit
  loss.value = result.loss

  riskLevel.value = result.riskLevel
  tradeRating.value = result.tradeRating
  liquidation.value = result.liquidation
  breakeven.value = result.breakeven
}

</script>

<template>
  <div>
    <input v-model="entry" placeholder="Entry">Entry<br>
    <input v-model="stopLoss" placeholder="Stop loss">SL<br>
    <input v-model="takeProfit" placeholder="Take profit">TP<br>
    <input v-model="size" placeholder="Size">Size<br>
    <input v-model="leverage" placeholder="Leverage">X<br>
    <button @click='callPnl'>Calculate</button>
    <br>
    <!-- <h2>{{ callPnl() }}</h2> -->
    <p>Reward: {{ reward }}</p>
    <p>Risk: {{ risk }}</p>
    <p>R: {{ rrr }}</p>
    <p>Profit: {{ profit }}</p>
    <p>Loss: {{ loss }}</p>
    <br>
    <p>Risk level: {{ riskLevel }}</p>
    <p>Rating: {{ tradeRating }}</p>
    <p>Liquidation: {{ liquidation }}</p>
    <p>Breakeven: {{ breakeven }}</p>


  </div>
</template>

<style scoped></style>