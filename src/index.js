import _ from "lodash";
import "./../dist/style.css"

console.log('object')
function component() {
    const element = document.createElement("div");
    
    // Lodash, now imported by this script
    // element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
