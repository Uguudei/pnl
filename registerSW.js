if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/pnl/sw.js', { scope: '/pnl/' })})}