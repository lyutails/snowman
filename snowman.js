import { commonCSSClassPrefix } from "./constants.js";
import createLayout from "./create_layout.js";
import { yep } from "./yep_anim.js";

const snowman = createLayout({
  elementname: "snowman",
  tag: "div",
  classname: `${commonCSSClassPrefix}_snowman`,
  appendchild: yep,
});

export const hat = createLayout({
  elementname: "hat",
  tag: "div",
  classname: `${commonCSSClassPrefix}_hat`,
  appendto: snowman,
});

export const scarf = createLayout({
  elementname: "scarf",
  tag: "div",
  classname: `${commonCSSClassPrefix}_scarf`,
  appendto: snowman,
});

export const buttonTop = createLayout({
  elementname: "buttonTop",
  tag: "div",
  classname: `${commonCSSClassPrefix}_button_top`,
  appendto: snowman,
});

export const buttonBottom = createLayout({
  elementname: "buttonBottom",
  tag: "div",
  classname: `${commonCSSClassPrefix}_button_bottom`,
  appendto: snowman,
});

export const leftGlove = createLayout({
  elementname: "leftGlove",
  tag: "div",
  classname: `${commonCSSClassPrefix}_left_glove`,
  appendto: snowman,
});

export const rightGlove = createLayout({
  elementname: "rightGlove",
  tag: "div",
  classname: `${commonCSSClassPrefix}_right_glove`,
  appendto: snowman,
});

export default snowman;
