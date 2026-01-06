import { request } from "./request.js";
const randomAdvice = document.getElementById("random-advice");

function getAdvice() {
  request("https://api.adviceslip.com/advice")
    .then((data) => {
      advice_id.textContent = data.slip.id;
      advice_text.textContent = data.slip.advice;
    })
    .catch((err) => {
      console.log(err);
    });
}

randomAdvice.addEventListener("click", getAdvice);

document.addEventListener("DOMContentLoaded", getAdvice);
