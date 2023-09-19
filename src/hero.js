import * as navComponents from "./nav";

export const dropDownMenu = document.querySelector(".nav-links-container");

export const toggleMenuBtn = document.querySelector(".toggle-menu");
toggleMenuBtn.addEventListener("click", () => {
  navComponents.toggleDropDown(dropDownMenu);
});
