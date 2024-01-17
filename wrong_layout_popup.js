import createLayout from "./create_layout.js";
import { overlay } from "./popup_play_again.js";

export function wrongLayoutPopup() {
  createLayout({
    elementname: "wrongLaoyutPopup",
    tag: "div",
    classname: "wrong_layout_popup",
    textcontent:
      "hey there o/ we detected your keyboard layout appears to be not english one, please fix it",
    appendto: document.body,
  });

  document.body.appendChild(overlay);
}
