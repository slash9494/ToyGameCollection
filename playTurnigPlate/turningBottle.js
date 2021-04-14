window.onload = function () {
  const btn = document.querySelector(".btn");
  const btn_switched = document.querySelector(".btn_switched");
  const bottle = document.querySelector(".bottle");

  let rotateNum = 0;

  btn.addEventListener("click", function () {
    rotateNum = Math.floor(Math.random() * 360) + 14400;
    bottle.style.transform = `rotate(${rotateNum}deg)`;
    btn.style.display = "none";
    btn_switched.style.display = "flex";
  });
  btn_switched.addEventListener("click", function () {
    rotateNum = Math.floor(Math.random() * 360);
    bottle.style.transform = `rotate(${rotateNum}deg)`;
    btn_switched.style.display = "none";
    btn.style.display = "flex";
  });
};
