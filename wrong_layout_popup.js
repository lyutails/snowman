import createLayout from "./create_layout.js";
import appendChildren from "./multiple_appendchild.js";

const wrongLayout = createLayout({
  elementname: "wrongLayout",
  tag: "div",
  classname: "wrong_layout_popup",
  textcontent:
    "hey there o/ we detected your keyboard layout appears to be not english one, please fix it",
  appendto: document.body,
});
wrongLayout.style.visibility = "hidden";

const overlay = createLayout({
  elementname: "overlay",
  classname: "overlay",
  tag: "div",
});
overlay.style.visibility = "hidden";

const crossClosePopup = createLayout({
  elementname: "crossClosePopup",
  classname: "popup_cross",
  tag: "div",
  appendto: wrongLayout,
});

appendChildren({
  elementAppendChildrenTo: document.body,
  children: [wrongLayout, overlay],
});

export function wrongLayoutPopup() {
  overlay.style.visibility = "visible";
  wrongLayout.style.visibility = "visible";
}

function closeLayoutPopup(element) {
  element.addEventListener("click", () => {
    overlay.style.visibility = "hidden";
    wrongLayout.style.visibility = "hidden";
  });
}

closeLayoutPopup(crossClosePopup);
closeLayoutPopup(overlay);
