export default function calcLeftTime(initTime) {
  initTime -= 1000;
  setInterval(() => {
    const s = Math.floor(initTime / 1000) % 60;
    const m = Math.floor(initTime / 1000 / 60) % 60;
    document.querySelector('.left-time').textContent = `${m}:${s < 10 ? '0' + s : s}`;
    initTime -= 1000;
    if (initTime <= 0) {
      clearInterval();
    }
  }, 1000);
}
