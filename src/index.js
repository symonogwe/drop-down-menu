import "./styles/styles.css";

// import toggleMenuBtn from "./nav";

const toggleMenuBtn = document.querySelectorAll(".toggle-menu");

function toggleDropDown() {
  const dropDown = document.querySelector(".nav-links-container");
  const caret = document.querySelector(".caret");

  dropDown.classList.toggle(".visible-menu");
  caret.classList.toggle("caret-rotate");
}

toggleMenuBtn.forEach((btn) => {
  btn.addEventListener("click", toggleDropDown);
});
