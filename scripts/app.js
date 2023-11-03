const vek = document.getElementById("vek");
const vyska = document.getElementById("vyska");
const vaha = document.getElementById("vaha");
const vysledekBtn = document.getElementById("calc");
const loader = document.querySelector(".loader-wrapper");

let vysledek = document.getElementById("vysledek");

const vypocitejBMI = () => {
  const vyskaCM = parseFloat(vyska.value);  

  const vyskaM = vyskaCM / 100;

  if (isNaN(vyskaCM) || isNaN(vaha.value)) {
    vysledek.innerHTML = "Zadej platné hodnoty pro výšku a váhu.";
  } else {
    const bmi = vaha.value / (vyskaM * vyskaM);

    if(bmi < 18.5){
      vysledek.className = "bmi-podvaha";
    }
    else if((bmi >= 18.5) && (bmi <= 24.99)) {
      vysledek.className = "bmi-prumer";
    }
    else if((bmi >= 25.0) && (bmi <= 29.99)) {
      vysledek.className = "bmi-nadvaha";
    }
    else if((bmi >= 30.0) && (bmi <= 34.99)) {
      vysledek.className = "bmi-obezita-1";
    }
    else if((bmi >= 35.0) && (bmi <= 39.99)) {
      vysledek.className = "bmi-obezita-2";
    }
    else if(bmi >= 40.0) {
      vysledek.className = "bmi-obezita-3";
    }

    vysledek.innerHTML = "BMI: " + bmi.toFixed(2);
  }
}

document.body.addEventListener('keyup', (event) => {
  if(event.key === 'Enter') {
    vypocitejBMI();
  }
});

window.addEventListener('load', () => {
  let opacity = 1;
  const fadeOutInterval = setInterval(() => {
    if (opacity <= 0) {
      clearInterval(fadeOutInterval);
      loader.style.display = "none";
    } else {
      opacity -= 0.02;
      loader.style.opacity = opacity;
    }
  }, 20);
});
