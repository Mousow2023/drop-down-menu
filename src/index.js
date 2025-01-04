import "./styles.css";

function toggleDrowDown(dropdown, button) {
  if (!dropdown || !button) {
    console.error("Invalid dropdown or button element");
    return;
  }

  const toggleVisibility = () => {
    dropdown.classList.toggle("dropdown--visible");
  };

  const closeOnClickOutside = (event) => {
    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
      dropdown.classList.remove("dropdown--visible");
    }
  };

  button.addEventListener("click", toggleVisibility);
  document.addEventListener("click", closeOnClickOutside);
}

const dd = document.querySelector(".dropdown");
const btn = document.querySelector("button");
toggleDrowDown(dd, btn);
