const life_per_tick = 1000 / 60;
const max_snowflakes = Math.min(18, (screen.width / 1280) * 18);
const snowflakes = [];

const period = [
  (n) => 5 * Math.sin(n),
  (n) => 8 * Math.cos(n),
  (n) => 5 * (Math.sin(n) + Math.cos(2 * n)),
  (n) => 2 * (Math.sin(0.25 * n) - Math.cos(0.75 * n) + 1),
  (n) => 5 * (Math.sin(0.75 * n) + Math.cos(0.25 * n) - 1),
];

const have_fun = ["⛄", "🦌", "🎁", "💵", "🍪", "💰", "🎄"];

function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === "complete"
      : document.readyState !== "loading"
  ) {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function resetSnowflake(snowflake) {
  let x = (snowflake.dataset.origX = Math.random() * 100);
  let y = (snowflake.dataset.origY = 0);
  let z = (snowflake.dataset.origZ =
    Math.random() < 0.1 ? Math.ceil(Math.random() * 100) + 25 : 0);
  let life = (snowflake.dataset.life = Math.ceil(Math.random() * 4000) + 6000);
  snowflake.dataset.origLife = Math.ceil(Math.random() * 4000) + 6000;
  snowflake.dataset.origLife = life;
  snowflake.style.transform = `translate3d(${x}vw, ${y}vh, ${z}px)`;
  snowflake.style.opacity = 0.8;
  snowflake.dataset.periodFunction = Math.floor(Math.random() * period.length);
  if (Math.random() < 0.0006) {
  snowflake.textContent = have_fun[Math.floor(Math.random() * have_fun.length)];
  }
}

function updatePositions() {
  snowflakes.forEach((snowflake) => {
    let origLife = parseFloat(snowflake.dataset.origLife);
    let curLife = parseFloat(snowflake.dataset.life);
    let dt = (origLife - curLife) / origLife;

    if (dt <= 1.0) {
      let p = period[parseInt(snowflake.dataset.periodFunction)];
      let x = p(dt * 2 * Math.PI) + parseFloat(snowflake.dataset.origX);
      let y = 100 * dt;
      let z = parseFloat(snowflake.dataset.origZ);
      snowflake.style.transform = `translate3d(${x}vw, ${y}vh, ${z}px)`;

      if (dt >= 0.5) {
        snowflake.style.opacity = 1.0 - (dt - 0.5) * 2;
      }

      curLife -= life_per_tick;
      snowflake.dataset.life = curLife;
    } else {
      resetSnowflake(snowflake);
    }
  });

  window.requestAnimationFrame(updatePositions);
}

export const mediumSnowflakesWrapper = document.createElement("div");
mediumSnowflakesWrapper.classList.add("medium_snowflakes_wrapper");
mediumSnowflakesWrapper.setAttribute("aria-hidden", "true");
mediumSnowflakesWrapper.setAttribute("role", "presentation");

function appendSnow() {
  let i = 0;
  const addSnowflake = () => {
    let snowflake = document.createElement("span");
    snowflake.classList.add("medium_snowflake");
    snowflake.setAttribute("aria-hidden", "true");
    snowflake.setAttribute("role", "presentation");
    snowflake.textContent = "❄";
    resetSnowflake(snowflake);
    snowflakes.push(snowflake);
    mediumSnowflakesWrapper.appendChild(snowflake);

    if (i++ <= max_snowflakes) {
      setTimeout(addSnowflake, Math.ceil(Math.random() * 300) + 100);
    }
  };
  addSnowflake();
  updatePositions();
}

ready(appendSnow);
