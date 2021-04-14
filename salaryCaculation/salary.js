window.onload = function () {
  const input = document.querySelector("input");
  const btn = document.querySelector(".btn");
  const span1 = document.getElementsByTagName("span")[0];
  const span2 = document.getElementsByTagName("span")[1];
  const span3 = document.getElementsByTagName("span")[2];
  const span4 = document.getElementsByTagName("span")[3];
  const secDiv = document.getElementsByClassName("item")[4];
  const secDiv2 = document.getElementsByClassName("item")[5];
  let timer;
  input.addEventListener("input", function (e) {
    btn.addEventListener("click", function () {
      clearInterval(timer);
      let secNum = 0;
      let value = e.target.value * 10000;
      let secValue = value / 365 / 24 / 60 / 60;
      let monValue = value / 12;
      timer = setInterval(function () {
        secNum++;
        span1.innerHTML =
          "약" + `&nbsp` + `${Math.round(e.target.value / 12)}` + "만원";
        span2.innerHTML =
          "약" + `&nbsp` + `${Math.round(e.target.value / 12 / 4)}` + "만원";
        span3.innerHTML =
          "약" + `&nbsp` + `${Math.round(100000000 / value)}` + "년";
        span4.innerHTML =
          "약" + `&nbsp` + `${Math.round(10000000 / monValue)}` + "달";
        secDiv.innerHTML = "당신은" + `<span>${secNum}</span>` + "초에";
        secDiv2.innerHTML =
          `<span>${(secValue * secNum).toFixed(0)}</span>` +
          "원을 벌고 있습니다.";
      }, 1000);
    });
  });
};
