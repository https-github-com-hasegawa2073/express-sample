countdown();

function countdown() {
  const countdown = document.querySelector("#countdown");

  let currentCount = Number(countdown.textContent);

  if (!currentCount) {
    countdown.textContent = "countdownパラメータが不正です。";
    return;
  }

  const intervalID = setInterval(() => {
    currentCount--;
    if (currentCount === 0) {
      clearInterval(intervalID);
      countdown.textContent = "カウントダウン終了！！";
    } else {
      countdown.textContent = currentCount;
    }
  }, 1000);
}
