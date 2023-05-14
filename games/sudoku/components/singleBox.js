import { createElement } from "../helper/createElement.js";

export function Box({value}){
    return createElement("div", { class: "boxStyle manualWrite defaultWrite"}, value)
}