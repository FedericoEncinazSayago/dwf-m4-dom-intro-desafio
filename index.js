const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function createLiElWithCosasQueAprendimos(ulElement) {
  cosasQueAprendimos.forEach((element) => {
    const newLiEl = document.createElement("li");
    const classItem = element.class || "item";
    newLiEl.innerHTML = element.tema;

    newLiEl.classList.add(classItem);
    ulElement.appendChild(newLiEl);
  });
}

function removeLiElements(ulElement) {
  const liElements = ulElement.querySelectorAll("li");

  for (const li of liElements) {
    li.remove();
  }
}

function main() {
  const ulEl = document.querySelector(".lista");

  removeLiElements(ulEl);
  createLiElWithCosasQueAprendimos(ulEl);
}

main();
