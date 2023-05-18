const emptiesEL = document.querySelectorAll(".empty");
const fillEl = document.querySelector(".fill");

const button = document.querySelector(".theme");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    button.innerHTML = "Light Mode";
  } else {
    button.innerHTML = "Dark Mode";
  }
});

fillEl.addEventListener("dragstart", ({ target }) => {
  target.classList.add("hold");
  setTimeout(() => {
    (target.className = ""), 0;
  });
});

fillEl.addEventListener("dragend", ({ target }) => {
  target.className = "fill";
});

for (const emptyEl of emptiesEL) {
  emptyEl.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  emptyEl.addEventListener("dragenter", (e) => {
    e.preventDefault();
    e.target.classList.add("hovered");
  });

  emptyEl.addEventListener("drop", ({ target }) => {
    target.className = "fill";
    target.append(fillEl);
  });

  emptyEl.addEventListener("dragleave", ({ target }) => {
    target.className = "empty";
  });
}
