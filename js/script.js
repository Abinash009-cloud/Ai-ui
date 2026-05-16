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
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
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
      },

      resize: true
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

// TYPING EFFECT

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

// NAVBAR ACTIVE LINK

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// GLOW EFFECT FOLLOW MOUSE

const glow = document.querySelector(".glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX - 200 + "px";

  glow.style.top = e.clientY - 200 + "px";
});

// SCROLL REVEAL EFFECT

const revealElements =
  document.querySelectorAll(
    ".card, .ai-tool-card, .project-card, .timeline-item"
  );

window.addEventListener("scroll", reveal);

function reveal() {

  const triggerBottom =
    window.innerHeight * 0.85;

  revealElements.forEach(el => {

    const boxTop =
      el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {

      el.classList.add("show");

    } else {

      el.classList.remove("show");
    }
  });
}

reveal();

// BUTTON RIPPLE EFFECT

const buttons =
  document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("click", function(e) {

    const circle =
      document.createElement("span");

    const diameter =
      Math.max(
        button.clientWidth,
        button.clientHeight
      );

    const radius = diameter / 2;

    circle.style.width =
      circle.style.height =
      `${diameter}px`;

    circle.style.left =
      `${e.clientX -
      button.offsetLeft -
      radius}px`;

    circle.style.top =
      `${e.clientY -
      button.offsetTop -
      radius}px`;

    circle.classList.add("ripple");

    const ripple =
      button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  });
});

// REAL TERMINAL TYPING EFFECT

const terminalOutput =
document.getElementById("terminal-output");

const terminalMessages = [

  "> Booting FutureDev AI...",
  "> Connecting Neural Network...",
  "> Loading Full Stack Modules...",
  "> Initializing Automation System...",
  "> Connecting OpenAI Services...",
  "> Access Granted...",
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
terminalOutput.scrollTop =
terminalOutput.scrollHeight;
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
// OPTIONAL

// Uncomment if you want animated terminal

// terminal.innerHTML = "";
// terminalAnimation();

// PARALLAX EFFECT

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  document.querySelector(".hero-content")
    .style.transform =
    `translateY(${scrollY * 0.2}px)`;
});

// FUTURE GLOW RANDOM ANIMATION

setInterval(() => {

  glow.style.opacity =
    Math.random() * 0.2 + 0.05;

}, 2000);
// MOBILE NAVBAR

const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");

  // ICON CHANGE

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

// CLOSE MENU WHEN CLICK LINK

document.querySelectorAll(".nav-links a")
.forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

    const icon =
    menuToggle.querySelector("i");

    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-3-line");

  });

});

// HERO BUTTONS

const startBtn =
document.getElementById("startFutureBtn");

const exploreBtn =
document.getElementById("exploreAiBtn");

// SCROLL TO ROADMAP

startBtn.addEventListener("click", () => {

  document.querySelector("#roadmap")
  .scrollIntoView({
    behavior:"smooth"
  });

});

// SCROLL TO AI TOOLS

exploreBtn.addEventListener("click", () => {

  document.querySelector("#tools")
  .scrollIntoView({
    behavior:"smooth"
  });

});

// TOOL BUTTON LINKS

document.querySelectorAll(".tool-btn")
.forEach(button => {

  button.addEventListener("click", () => {

    const link =
    button.getAttribute("data-link");

    window.open(link, "_blank");

  });

});

// PROJECT BUTTON LINKS

document.querySelectorAll(".project-btn")
.forEach(button => {

  button.addEventListener("click", () => {

    const link =
    button.getAttribute("data-link");

    window.open(link, "_blank");

  });

});

// ANIMATED COUNTERS

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters() {

  if(counterStarted) return;

  const statsSection =
  document.querySelector(".hero-stats");

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

          counter.innerText = target;

          // ADD X TO FIRST
          if(target === 10){
            counter.innerText = "10X";
          }

          // ADD /7 TO LAST
          if(target === 24){
            counter.innerText = "24/7";
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

// LOAD SAVED THEME

if(localStorage.getItem("theme") === "light"){

  document.body.classList.add("light-theme");

  themeIcon.classList.remove("ri-moon-line");
  themeIcon.classList.add("ri-sun-line");

}

// TOGGLE THEME

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-theme");

  // SAVE THEME

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
// LOADER SCREEN

window.addEventListener("load", () => {

  const loader =
  document.querySelector(".loader");

  setTimeout(() => {

    loader.classList.add("hide");

  }, 3200);

});
// EMAIL JS

emailjs.init("YOUR_PUBLIC_KEY");

const contactForm =
document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    {
      from_name:
      document.getElementById("name").value,

      from_email:
      document.getElementById("email").value,

      message:
      document.getElementById("message").value
    }

  ).then(() => {

    alert("Message Sent Successfully 🚀");

    contactForm.reset();

  }).catch(() => {

    alert("Failed To Send Message");

  });

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

// OPEN CHAT

chatbotToggle.addEventListener("click", () => {

  chatbot.classList.toggle("show");

});

// CLOSE CHAT

closeChat.addEventListener("click", () => {

  chatbot.classList.remove("show");

});

// SEND MESSAGE

function sendMessage(){

  const message =
  chatInput.value.trim();

  if(message === "") return;

  // USER MESSAGE

  const userDiv =
  document.createElement("div");

  userDiv.classList.add("user-message");

  userDiv.textContent = message;

  chatBody.appendChild(userDiv);

  // CLEAR INPUT

  chatInput.value = "";

  // AUTO REPLY

  setTimeout(() => {

    const botDiv =
    document.createElement("div");

    botDiv.classList.add("bot-message");

    botDiv.innerHTML =
    getBotReply(message);

    chatBody.appendChild(botDiv);

    // AUTO SCROLL

    chatBody.scrollTop =
    chatBody.scrollHeight;

  }, 700);

}

// BUTTON CLICK

sendBtn.addEventListener(
  "click",
  sendMessage
);

// ENTER KEY

chatInput.addEventListener(
  "keypress",
  (e) => {

    if(e.key === "Enter"){
      sendMessage();
    }

  }
);

// SIMPLE AI REPLIES

function getBotReply(message){

  const msg =
  message.toLowerCase();

  if(
    msg.includes("html")
  ){
    return "HTML creates the structure of websites 🚀";
  }

  if(
    msg.includes("css")
  ){
    return "CSS is used for styling beautiful UI 🎨";
  }

  if(
    msg.includes("javascript")
  ){
    return "JavaScript adds logic and interactivity ⚡";
  }

  if(
    msg.includes("react")
  ){
    return "React helps developers build fast modern UI ⚛️";
  }

  if(
    msg.includes("ai")
  ){
    return "AI is transforming software development 🤖";
  }

  if(
    msg.includes("node")
  ){
    return "Node.js allows JavaScript to run on servers 🌐";
  }

  if(
    msg.includes("mongodb")
  ){
    return "MongoDB is a NoSQL database used in modern apps 🍃";
  }

  if(
    msg.includes("future")
  ){
    return "The future belongs to developers using AI 🚀";
  }

  if(
    msg.includes("hello")
  ){
    return "Hello Developer 👋";
  }

  return `
    I am Future AI Assistant 🤖<br>
    Try asking about:
    HTML, CSS, JavaScript,
    React, AI, Node.js,
    MongoDB or Future Tech 🚀
  `;

}

/* TOOL FILTER */

let filterBtns =
  document.querySelectorAll(".filter-btn");

let toolCards =
  document.querySelectorAll(".ai-tool-card");

const toolSearch =
  document.getElementById("toolSearch");

filterBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    document
      .querySelector(".filter-btn.active")
      .classList.remove("active");

    btn.classList.add("active");

    const filter = btn.dataset.filter;

    toolCards.forEach(card => {

      if (
        filter === "all" ||
        card.dataset.category === filter
      ) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

});

/* SEARCH */

toolSearch.addEventListener("keyup", () => {

  const value =
    toolSearch.value.toLowerCase();

  toolCards.forEach(card => {

    const text =
      card.innerText.toLowerCase();

    if (text.includes(value)) {

      card.style.display = "block";

    } else {

      card.style.display = "none";

    }

  });

});

/* TOOL FILTER */

 filterBtns =
document.querySelectorAll(".filter-btn");

 toolCards =
document.querySelectorAll(".ai-tool-card");

toolSearch =
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

/* SEARCH */

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
window.addEventListener("load", () => {

  document.body.style.overflow = "hidden";

  loader.classList.add("hide");

  document.body.style.overflow = "auto";
});