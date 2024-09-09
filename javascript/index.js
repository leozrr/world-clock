function updateTime() {
  // DÜSSELDORF

  let duesseldorfElement = document.querySelector("#duesseldorf");
  let duesseldorfDateElement = duesseldorfElement.querySelector(".date");
  let duesseldorfTimeElement = duesseldorfElement.querySelector(".time");
  let duesseldorfTime = moment().tz("Europe/Berlin");
  duesseldorfDateElement.innerHTML = duesseldorfTime.format("MMMM Do YYYY");
  duesseldorfTimeElement.innerHTML = duesseldorfTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // SEOUL

  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");
  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");

  // TOKYO

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
