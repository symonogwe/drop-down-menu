export function toggleDropDown() {
  const dropDown = document.querySelector(".nav-links-container");
  const caret = document.querySelector(".caret");

  dropDown.classList.toggle("visible-dropDown");

  caret.classList.toggle("caret-rotate");
}

const toggleMenuBtn = document.querySelectorAll(".toggle-menu");
toggleMenuBtn.forEach((btn) => {
  btn.addEventListener("click", toggleDropDown);
});

export default toggleMenuBtn;
