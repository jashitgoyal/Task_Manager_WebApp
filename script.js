const cursor = new MouseFollower({
  el: null,
  container: document.body,
  className: "mf-cursor",
  innerClassName: "mf-cursor-inner",
  textClassName: "mf-cursor-text",
  mediaClassName: "mf-cursor-media",
  mediaBoxClassName: "mf-cursor-media-box",
  iconSvgClassName: "mf-svgsprite",
  iconSvgNamePrefix: "-",
  iconSvgSrc: "",
  dataAttr: "cursor",
  hiddenState: "-hidden",
  textState: "-text",
  iconState: "-icon",
  activeState: "-active",
  mediaState: "-media",
  stateDetection: {
    "-pointer": "a,button",
    "-hidden": "iframe",
  },
  visible: true,
  visibleOnState: false,
  speed: 0.55,
  ease: "expo.out",
  overwrite: true,
  skewing: 0,
  skewingText: 2,
  skewingIcon: 2,
  skewingMedia: 2,
  skewingDelta: 0.001,
  skewingDeltaMax: 0.15,
  stickDelta: 0.15,
  showTimeout: 20,
  hideOnLeave: true,
  hideTimeout: 300,
  hideMediaTimeout: 300,
});
//Gsap Animative Stuff
gsap.registerPlugin(ScrollTrigger);
gsap.from(".container .left", {
  scrollTrigger: {
    trigger: ".container",
    toggleActions: "restart none none restart",
    ease:"bounce",
    markes: true,
  },
  x: -200,
  duration: 2,
});

gsap.from(".container .right", {
  scrollTrigger: {
    trigger: ".container",
    toggleActions: "restart none none restart",
    ease:"bounce",
    markes: true,
  },
  y: -200,
  duration: 2,
});

gsap.from(".projectCard", {
  scrollTrigger: {
    trigger: ".container",
    toggleActions: "restart none none restart",
    ease:"bounce",
    markes: true,
  },
  y:600,
  duration: 2,
});

gsap.from(".calendar", {
  scrollTrigger: {
    trigger: ".container",
    toggleActions: "restart none none restart",
    ease:"bounce",
    markes: true,
  },
  y:600,
  duration: 2,
});


gsap.from(".messages", {
  scrollTrigger: {
    trigger: ".container",
    toggleActions: "restart none none restart",
    ease:"bounce",
    markes: true,
  },
  y:600,
  duration: 2,
});
// Dashboard js
let toggle = document.querySelector(".toggle");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let close = document.querySelector(".close");
let body = document.querySelector("body");
let searchBx = document.querySelector(".searchBx");
let searchOpen = document.querySelector(".searchOpen");
let searchClose = document.querySelector(".searchClose");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  left.classList.toggle("active");
  right.classList.toggle("overlay");
  body.style.overflow = "hidden";
});
close.onclick = () => {
  toggle.classList.remove("active");
  left.classList.remove("active");
  right.classList.remove("overlay");
  body.style.overflow = "";
};
searchOpen.onclick = () => {
  searchBx.classList.add("active");
};
searchClose.onclick = () => {
  searchBx.classList.remove("active");
};
window.onclick = (e) => {
  if (e.target == right) {
    toggle.classList.remove("active");
    left.classList.remove("active");
    right.classList.remove("overlay");
    body.style.overflow = "";
  }
};


// Show model
function showModal(){
  document.querySelector(".overlay").classList.add( "showoverlay" );
  document.querySelector(".login-form").classList.add( "showlogin" );
  
}

btnlogin  = document.querySelector(".signup");

btnlogin.addEventListener('click', showModal);


