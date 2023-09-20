import "./styles/styles.css";

import * as navComponents from "./nav";

function toggleMenuDrop(item) {
  item.addEventListener("click", navComponents.toggleDropDown);
}

export default toggleMenuDrop;
