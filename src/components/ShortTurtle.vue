<script setup>
import { ref } from 'vue';
import { calcPnl } from '../assets/calc.js';

defineProps({
  position: {
    type: String,
    required: true
  }
})

const entry = ref(10.0)
const stopLoss = ref(10.5)
const takeProfit = ref(8.0)
const size = ref(1000)
const leverage = ref(10)

const reward = ref()
const risk = ref()
const profit = ref()
const loss = ref()
const rrr = ref()

const riskLevel = ref()
const tradeRating = ref()
const liquidation = ref()
const breakeven = ref()

function calcShort() {
  // Calculate risk and reward
  let result = calcPnl('short', entry.value, stopLoss.value, takeProfit.value, size.value, leverage.value)
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
    <h2>{{ position }}</h2>

    <input v-model='entry' placeholder='Entry'>Entry<br>
    <input v-model='stopLoss' placeholder='Stop loss'>SL<br>
    <input v-model='takeProfit' placeholder='Take profit'>TP<br>
    <input v-model='size' placeholder='Size'>Size<br>
    <input v-model='leverage' placeholder='Leverage'>X<br>
    <button @click='calcShort'>Calculate</button>
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

<style scoped>
@media (min-width: 1024px) {}
</style>
