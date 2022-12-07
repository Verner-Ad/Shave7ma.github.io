"use strict";
function calc() {
  let name = prompt("Как вас зовут?");
  let form = document.forms.calculator;
  let p0 = form.elements.price0;
  if (p0.value == 0) p0.value = 9;
  let p1 = form.elements.price1;
  if (p1.value == 0) p1.value = 15;
  let p2 = form.elements.price2;
  if (p2.value == 0) p2.value = 9;
  let p3 = form.elements.price3;
  if (p3.value == 0) p3.value = 39;
  let p4 = form.elements.price4;
  if (p4.value == 0) p4.value = 99;
  let p5 = form.elements.price5;
  if (p5.value == 0) p5.value = 75;
  let c0 = form.elements.count0;
  let c1 = form.elements.count1;
  let c2 = form.elements.count2;
  let c3 = form.elements.count3;
  let c4 = form.elements.count4;
  let c5 = form.elements.count5;
  if (c0.value > 3) {
    let con = confirm(
      "У нас всего 3 акционных товара, а вам нужно больше. Возьмете 3?"
    );
    if (con) c0.value = 3;
    else c0.value = 0;
  }
  let res =
    p0.value * c0.value +
    p1.value * c1.value +
    p2.value * c2.value +
    p3.value * c3.value +
    p4.value * c4.value +
    p5.value * c5.value;
  let result = document.getElementById("result");
  if (isNaN(res)) result.innerHTML = "Что-то пошло не так...";
  else {
    result.innerHTML = `${name || "Аноним"}, с вас ${res} рублей.`;
  }
  window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
  });
  btn.addEventListener("cilck",calc());
}
