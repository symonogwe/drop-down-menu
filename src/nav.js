import logoSvg from "./Assets/logo.svg";
import dropUpSvg from "./Assets/drop-up.svg";
import dropDownSvg from "./Assets/drop-down.svg";

export const logoImg = document.querySelector(".logo-img");
logoImg.src = logoSvg;

export const menuArrow = document.querySelector(".menu-arrow");
menuArrow.src = dropUpSvg;

export function toggleDropDown(element) {
  element.classList.toggle("visible-menu");
  if (menuArrow.src === dropUpSvg) {
    menuArrow.src = dropDownSvg;
    return true;
  }
  menuArrow.src = dropUpSvg;
  return false;
}
