const numericInput = document.getElementById("js-myInput");
const convert = document.getElementById("js-convert");

const startingMeters = document.getElementById("js-starting-meters");
const startingFeet = document.getElementById("js-starting-feet");
const startingLiters = document.getElementById("js-starting-liters");
const startingGallons = document.getElementById("js-starting-gallons");
const startingKilos = document.getElementById("js-starting-kilos");
const startingPounds = document.getElementById("js-starting-pounds");

const endingMeters = document.getElementById("js-ending-meters");
const endingFeet = document.getElementById("js-ending-feet");
const endingLiters = document.getElementById("js-ending-liters");
const endingGallons = document.getElementById("js-ending-gallons");
const endingKilos = document.getElementById("js-ending-kilos");
const endingPounds = document.getElementById("js-ending-pounds");

numericInput.addEventListener("input", function (e) {
  this.value = this.value.replace(/\D/g, "");
});

convert.addEventListener("click", () => {
  startingMeters.textContent = numericInput.value;
  startingFeet.textContent = numericInput.value;
  startingLiters.textContent = numericInput.value;
  startingGallons.textContent = numericInput.value;
  startingKilos.textContent = numericInput.value;
  startingPounds.textContent = numericInput.value;

  endingMeters.textContent = (numericInput.value * 3.281).toFixed(3);
  endingLiters.textContent = (numericInput.value * 0.264).toFixed(3);
  endingKilos.textContent = (numericInput.value * 2.204).toFixed(3);
  endingFeet.textContent = (numericInput.value * 0.3048).toFixed(3);
  endingGallons.textContent = (numericInput.value * 3.785).toFixed(3);
  endingPounds.textContent = (numericInput.value * 0.454).toFixed(3);
});

