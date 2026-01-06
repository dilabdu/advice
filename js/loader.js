const overlayEl = document.getElementById("overlay");

export function loader(state) {
  if (state) {
    overlayEl.classList.remove("hidden");
  } else {
    overlayEl.classList.add("hidden");
  }
}
