// AOS ANIMATION

AOS.init({
  duration: 1000,
  once: true
});

// PARTICLES JS

particlesJS("particles-js", {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 900
      }
    },

    color: {
      value: "#00f7ff"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.5,
      random: true
    },

    size: {
      value: 3,
      random: true
    },

    line_linked: {
      enable: true,
      distance: 150,
      color: "#00f7ff",
      opacity: 0.2,
      width: 1
    },

    move: {
      enable: true,
      speed: 2
    }
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },

      onclick: {
        enable: true,
        mode: "push"
      }
    },

    modes: {

      grab: {
        distance: 180,
        line_linked: {
          opacity: 0.6
        }
      },

      push: {
        particles_nb: 4
      }
    }
  },

  retina_detect: true
});

// HERO TYPING EFFECT

const heroTitle = document.querySelector(".hero h2");

const texts = [
  "Developer Of The Future",
  "Build With AI",
  "Create The Next Generation",
  "AI + Coding + Automation"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentText = texts[textIndex];

  if (!isDeleting) {

    heroTitle.textContent =
      currentText.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentText.length) {

      isDeleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }

  } else {

    heroTitle.textContent =
      currentText.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      isDeleting = false;

      textIndex++;

      if (textIndex >= texts.length) {
        textIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 90);
}

typeEffect();

// MOBILE NAVBAR

const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");

  const icon =
  menuToggle.querySelector("i");

  if(navMenu.classList.contains("active")){

    icon.classList.remove("ri-menu-3-line");
    icon.classList.add("ri-close-line");

  } else {

    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-3-line");
  }

});

// CLOSE MENU

document.querySelectorAll(".nav-links a")
.forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

  });

});

// ACTIVE NAVBAR LINK

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {

      current =
      section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      .includes(current)
    ) {

      link.classList.add("active");

    }

  });

});

// GLOW FOLLOW MOUSE

const glow =
document.querySelector(".glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left =
  e.clientX - 200 + "px";

  glow.style.top =
  e.clientY - 200 + "px";

});

// SCROLL REVEAL

const revealElements =
document.querySelectorAll(
".card, .ai-tool-card, .project-card, .timeline-item"
);

function reveal() {

  const triggerBottom =
  window.innerHeight * 0.85;

  revealElements.forEach(el => {

    const boxTop =
    el.getBoundingClientRect().top;

    if(boxTop < triggerBottom){

      el.classList.add("show");

    }

  });

}

window.addEventListener("scroll", reveal);

reveal();

// TERMINAL EFFECT

const terminalOutput =
document.getElementById("terminal-output");

const terminalMessages = [

  "> Booting FutureDev AI...",
  "> Connecting Neural Network...",
  "> Loading Full Stack Modules...",
  "> Initializing Automation System...",
  "> Welcome Developer 🚀"

];

let lineIndex = 0;

function typeTerminalLine(text, callback){

  const line =
  document.createElement("p");

  terminalOutput.appendChild(line);

  let charIndex = 0;

  function typeChar(){

    if(charIndex < text.length){

      line.textContent +=
      text.charAt(charIndex);

      charIndex++;

      setTimeout(typeChar, 35);

    } else {

      setTimeout(callback, 500);

    }

  }

  typeChar();

}

function startTerminalAnimation(){

  if(lineIndex < terminalMessages.length){

    typeTerminalLine(
      terminalMessages[lineIndex],
      () => {

        lineIndex++;

        startTerminalAnimation();

      }
    );

  }

}

startTerminalAnimation();

// HERO BUTTONS

const startBtn =
document.getElementById("startFutureBtn");

const exploreBtn =
document.getElementById("exploreAiBtn");

if(startBtn){

  startBtn.addEventListener("click", () => {

    document.querySelector("#roadmap")
    .scrollIntoView({
      behavior:"smooth"
    });

  });

}

if(exploreBtn){

  exploreBtn.addEventListener("click", () => {

    document.querySelector("#tools")
    .scrollIntoView({
      behavior:"smooth"
    });

  });

}

// COUNTER

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters() {

  if(counterStarted) return;

  const statsSection =
  document.querySelector(".hero-stats");

  if(!statsSection) return;

  const sectionTop =
  statsSection.getBoundingClientRect().top;

  if(sectionTop < window.innerHeight - 100){

    counterStarted = true;

    counters.forEach(counter => {

      const target =
      +counter.getAttribute("data-target");

      let count = 0;

      const speed = target / 100;

      function updateCounter(){

        count += speed;

        if(count < target){

          counter.innerText =
          Math.floor(count);

          requestAnimationFrame(updateCounter);

        } else {

          if(target === 10){

            counter.innerText = "10X";

          } else if(target === 24){

            counter.innerText = "24/7";

          } else {

            counter.innerText = target;

          }

        }

      }

      updateCounter();

    });

  }

}

window.addEventListener("scroll", runCounters);

runCounters();

// THEME TOGGLE

const themeToggle =
document.querySelector(".theme-toggle");

const themeIcon =
themeToggle.querySelector("i");

if(localStorage.getItem("theme") === "light"){

  document.body.classList.add("light-theme");

  themeIcon.classList.remove("ri-moon-line");

  themeIcon.classList.add("ri-sun-line");

}

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-theme");

  if(document.body.classList.contains("light-theme")){

    localStorage.setItem("theme", "light");

    themeIcon.classList.remove("ri-moon-line");
    themeIcon.classList.add("ri-sun-line");

  } else {

    localStorage.setItem("theme", "dark");

    themeIcon.classList.remove("ri-sun-line");
    themeIcon.classList.add("ri-moon-line");

  }

});

// LOADER

window.addEventListener("load", () => {

  const loader =
  document.querySelector(".loader");

  setTimeout(() => {

    loader.classList.add("hide");

  }, 3000);

});

// CHATBOT

const chatbotToggle =
document.querySelector(".chatbot-toggle");

const chatbot =
document.querySelector(".chatbot");

const closeChat =
document.querySelector(".close-chat");

const sendBtn =
document.getElementById("send-btn");

const chatInput =
document.getElementById("chat-input");

const chatBody =
document.getElementById("chat-body");

chatbotToggle.addEventListener("click", () => {

  chatbot.classList.toggle("show");

});

closeChat.addEventListener("click", () => {

  chatbot.classList.remove("show");

});

function sendMessage(){

  const message =
  chatInput.value.trim();

  if(message === "") return;

  const userDiv =
  document.createElement("div");

  userDiv.classList.add("user-message");

  userDiv.textContent = message;

  chatBody.appendChild(userDiv);

  chatInput.value = "";

  setTimeout(() => {

    const botDiv =
    document.createElement("div");

    botDiv.classList.add("bot-message");

    botDiv.innerHTML =
    getBotReply(message);

    chatBody.appendChild(botDiv);

    chatBody.scrollTop =
    chatBody.scrollHeight;

  }, 700);

}

sendBtn.addEventListener(
"click",
sendMessage
);

chatInput.addEventListener(
"keypress",
(e) => {

  if(e.key === "Enter"){

    sendMessage();

  }

}
);

function getBotReply(message){

  const msg =
  message.toLowerCase();

  if(msg.includes("html")){
    return "HTML creates website structure 🚀";
  }

  if(msg.includes("css")){
    return "CSS creates beautiful UI 🎨";
  }

  if(msg.includes("javascript")){
    return "JavaScript adds interactivity ⚡";
  }

  if(msg.includes("react")){
    return "React builds modern frontend apps ⚛️";
  }

  if(msg.includes("ai")){
    return "AI is changing development 🤖";
  }

  return "Ask me about HTML, CSS, JavaScript, React or AI 🚀";

}

// TOOL FILTER

const filterBtns =
document.querySelectorAll(".filter-btn");

const toolCards =
document.querySelectorAll(".ai-tool-card");

const toolSearch =
document.getElementById("toolSearch");

if(toolSearch){

  filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      document
      .querySelector(".filter-btn.active")
      .classList.remove("active");

      btn.classList.add("active");

      const filter =
      btn.dataset.filter;

      toolCards.forEach(card => {

        if(
          filter === "all" ||
          card.dataset.category === filter
        ){

          card.style.display = "block";

        } else {

          card.style.display = "none";

        }

      });

    });

  });

  toolSearch.addEventListener("keyup", () => {

    const value =
    toolSearch.value.toLowerCase();

    toolCards.forEach(card => {

      const text =
      card.innerText.toLowerCase();

      if(text.includes(value)){

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

}