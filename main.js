const typewriterDiv = document.getElementById("typed");
const boxContainer = document.querySelector(".project .container");
const text = "Front-End Developer";
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000;
let index = 0;
let erasing = false;

function typeWriter() {
  if (index < text.length && !erasing) {
    typewriterDiv.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, typingDelay);
  } else if (index > 0 && erasing) {
    typewriterDiv.textContent = text.substring(0, index - 1);
    index--;
    setTimeout(typeWriter, erasingDelay);
  } else {
    erasing = !erasing;
    setTimeout(typeWriter, newTextDelay);
  }
}
typeWriter();
// ###############################################
let scr = document.querySelector(".scroller");
window.addEventListener("scroll", () => {
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolltop = document.documentElement.scrollTop;
  scr.style.width = `${(scrolltop / height) * 100}%`;
});
// ##########################################################
// button Top
let btn = document.getElementById("top");
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
// data
const data = [
  {
    id: 0,
    title: "Movie Project",
    description:
      "This project displays movies, TV shows, and actors so that you can search ...",
    imageURL: "images/movie-project.webp",
    tools: [
      { name: "html", icon: "fa-brands fa-html5" },
      { name: "css", icon: "fa-brands fa-css3-alt" },
      { name: "js", icon: "fa-brands fa-js js" },
      { name: "react", icon: "fa-brands fa-react react" },
    ],
    link: "https://mohammad-hmeidan.github.io/movie-project/",
  },
  {
    id: 1,
    title: "CRUDS Project",
    description:
      "There are Create, Read, Update, Delete and Search data in this project",
    imageURL: "images/cruds.webp",
    tools: [
      { name: "html", icon: "fa-brands fa-html5" },
      { name: "css", icon: "fa-brands fa-css3-alt" },
      { name: "js", icon: "fa-brands fa-js js" },
    ],
    link: "https://mohammad-hmeidan.github.io/CRUDS-Project/",
  },
  {
    id: 2,
    title: "Typing Test",
    description:
      "A game to test your writing speed in English using HTML CSS JS",
    imageURL: "images/typing-test-speed.webp",
    tools: [
      { name: "html", icon: "fa-brands fa-html5" },
      { name: "css", icon: "fa-brands fa-css3-alt" },
      { name: "js", icon: "fa-brands fa-js js" },
    ],
    link: "https://mohammad-hmeidan.github.io/typing-test/",
  },
  {
    id: 3,
    title: "Carousel",
    description: "A site that displays images with a beautiful effect",
    imageURL: "images/carousel.webp",
    tools: [
      { name: "html", icon: "fa-brands fa-html5" },
      { name: "css", icon: "fa-brands fa-css3-alt" },
      { name: "js", icon: "fa-brands fa-js js" },
    ],
    link: "https://mohammad-hmeidan.github.io/carousel/",
  },
  {
    id: 4,
    title: "Hangman Game",
    description:
      "The interactive “Hanged Man” game where you try to guess the letters of various words, and with every mistake a part of the gallows is drawn until you lose.",
    imageURL: "images/hangman.webp",
    tools: [
      { name: "html", icon: "fa-brands fa-html5" },
      { name: "css", icon: "fa-brands fa-css3-alt" },
      { name: "js", icon: "fa-brands fa-js js" },
    ],
    link: "https://mohammad-hmeidan.github.io/Hangman-Game/",
  },
  {
    id: 5,
    title: "Memory Game",
    description: "Simple calculator project with HTML CSS JS",
    imageURL: "images/memory-game.webp",
    tools: [
      { name: "html", icon: "fa-brands fa-html5" },
      { name: "css", icon: "fa-brands fa-css3-alt" },
      { name: "js", icon: "fa-brands fa-js js" },
    ],
    link: "https://mohammad-hmeidan.github.io/Memory-Game/",
  },
  {
    id: 6,
    title: "Piano Game",
    description:
      "A piano game website where you can control through the keyboard, and you can adjust the rhythm's volume from the website.",
    imageURL: "images/piano-game.webp",
    tools: [
      { name: "html", icon: "fa-brands fa-html5" },
      { name: "css", icon: "fa-brands fa-css3-alt" },
      { name: "js", icon: "fa-brands fa-js js" },
    ],
    link: "https://mohammad-hmeidan.github.io/Piano-Game",
  },
  {
    id: 8,
    title: "Calculator",
    description:
      "A calculator website that performs basic arithmetic operations, and you can interact with it using the keyboard buttons.",
    imageURL: "images/calculator.webp",
    tools: [
      { name: "html", icon: "fa-brands fa-html5" },
      { name: "css", icon: "fa-brands fa-css3-alt" },
      { name: "js", icon: "fa-brands fa-js js" },
    ],
    link: "https://mohammad-hmeidan.github.io/Dashboard/",
  },
  {
    id: 9,
    title: "Random color",
    description:
      "A page that creates random colors which you can copy to your clipboard by clicking on them.",
    imageURL: "images/random-color.webp",
    tools: [
      { name: "html", icon: "fa-brands fa-html5" },
      { name: "css", icon: "fa-brands fa-css3-alt" },
      { name: "js", icon: "fa-brands fa-js js" },
    ],
    link: "https://mohammad-hmeidan.github.io/Random-Color/",
  },
  {
    id: 10,
    title: "Dashboard",
    description:
      "A static website designed using HTML and CSS that simulates a dashboard",
    imageURL: "images/dashboard.webp",
    tools: [
      { name: "html", icon: "fa-brands fa-html5" },
      { name: "css", icon: "fa-brands fa-css3-alt" },
    ],
    link: "https://mohammad-hmeidan.github.io/Dashboard/",
  },
];
data.map((el) => {
  let div = document.createElement("div");
  let tools = `${el.tools
    .map((e) => {
      return `<i class="${e.icon} ${e.name}"></i>`;
    })
    .join("")}`;
  div.className = "box";
  div.innerHTML = `
  <span class="border top"></span>
  <span class="border bottom"></span>
  <span class="border left"></span>
  <span class="border right"></span>
  <div class="image">  
    <img src="${el.imageURL}" alt="" />
  </div>
  <div class="content">
    <h3>${el.title}</h3>
    <p>
      ${el.description}
    </p>
  </div>
  <div class="tools">
  ${tools}
  </div>
  <div class="info">
    <a
      href="${el.link}"
      target="_blank"
    >
      Show Project
    </a>
    <i class="fas fa-long-arrow-alt-right"></i>
  </div>
`;
  boxContainer.appendChild(div);
});
