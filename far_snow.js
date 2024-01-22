import createLayout from "./create_layout.js";

export const farSnowflakesWrapper = createLayout({
  elementname: "farSnowflakesWrapper",
  classname: "far_snowflakes_wrapper",
  tag: "div",
});

export function createFarSnow() {
  for (let i = 0; i < 50; i++) {
    const farSnowflake = createLayout({
      elementname: "farSnowflake",
      classname: "far_snowflake",
      tag: "div",
    });

    farSnowflake.style.left = `${Math.random() * 100}%`;
    farSnowflake.style.animationDuration = `${Math.random() * 6 + 8}s`;
    farSnowflake.style.animationDelay = `${Math.random()}s`;
    farSnowflakesWrapper.appendChild(farSnowflake);
  }
}

// createFarSnow();

window.addEventListener("load", createFarSnow);
