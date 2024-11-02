function generatePoem(event) {
  event.preventDefault();
  
  new Typewriter("#poem", {
    strings: "My love for you is like the raging sea,"
    autoStart: true,
    delay:1
cursor: "",
  });
}
let poemFormElement = document.querySelector("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
