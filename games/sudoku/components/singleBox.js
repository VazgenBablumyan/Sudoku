import { createElement } from "../helper/createElement.js";

export function Box({value}){
     const input = createElement("input", {type: "text",class: `boxStyle manualWrite `})
     let div = createElement("div", { class: "boxStyle  defaultWrite"}, value)
    return value? div:input
}