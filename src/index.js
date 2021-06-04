import _ from "lodash";
import "./style.css";
import "./image-carousel";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faTrain } from "@fortawesome/free-solid-svg-icons/faTrain";
import { faSubway } from "@fortawesome/free-solid-svg-icons/faSubway";
import RER from "./assets/RER.png"


library.add(faTrain);
library.add(faSubway);
dom.watch();

// console.log(document.querySelector('#RER').src)
document.querySelector('#RER').src = RER

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  // element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
