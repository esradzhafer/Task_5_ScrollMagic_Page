



// Import gsap and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Animation
var scrollUp = document.querySelector(".jwpnavbar");

gsap.to(scrollUp, {
  position: "fixed",
  zIndex: 1000,
  scrollTrigger: {
    trigger: "body", 
    start: "top -50",
    toggleClass: { className: "jwpnavbar--scrolled", targets: ".jwpnavbar" },
  },
});

gsap.to(scrollUp, {
  scrollTrigger: {
    trigger: "body", 
    start: "top -300",
    onUpdate: ({ direction }) => {
      if (direction === -1) {
        scrollUp.classList.remove("jwpnavbar--up");
      } else {
        scrollUp.classList.add("jwpnavbar--up");
      }
    },
  },
});



// Function to reset the page to its initial state
function resetPage() {
  // Remove the scale transformation from the moon image
  gsap.to("#scaleElement", 0.2, { scale: 1, ease: Power0.easeNone });

  // Reset ScrollMagic scene progress
  scene.progress(0);

  // Reset scroll position to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add event listener to the reset button
document.getElementById('resetButton').addEventListener('click', resetPage);





// Grid Images Animation
gsap.to("#cover", {
  backgroundColor: "babyblue",
  opacity: 0,
  x: 800,
  duration: 8,
  
  scrollTrigger: {
    trigger: "#cover",
    start: "top 60%",
    end: "top 10%",
    toggleActions: "restart reverse none none",
  },
});



// Parallax Effect Animation
gsap.from("#m1", { scrollTrigger: { scrub: true }, y: 100, x: -300 });
gsap.from("#m2", { scrollTrigger: { scrub: true }, x: 200, y:-30 });
gsap.from("#m3", { scrollTrigger: { scrub: true }, y: -100, x: 70 });
gsap.from("#m4", { scrollTrigger: { scrub: true }, x: -50 });
gsap.from("#m5", { scrollTrigger: { scrub: true }, x: 30 });
gsap.from("#tree", { scrollTrigger: { scrub: true }, x: -100, y: 70 });
gsap.from("#tree2", { scrollTrigger: { scrub: true }, x: -500, y: 70 });

gsap.from("#leaf", { scrollTrigger: { scrub: true },  y: 100, });
gsap.from("#plant", { scrollTrigger: { scrub: true }, y: 10 });
gsap.from("#text", { scrollTrigger: { scrub: true }, x: 380 });





// Typewriter Effect Animation
// Import gsap and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
var typewriter = document.querySelector(".typewriter");
gsap.from(".typewriter", {
  scrollTrigger: {
    trigger: ".typewriter",
    triggerHook: 0.8,
  },
  duration: 99999,
  opacity: 6,
  y: 0,
  onStart: function () {
    typewriter.style.display = "inline-block"; 
  },
  onComplete: function () {
    typewriter.style.borderRight = "none"; 
  },
});

ScrollTrigger.create({
  trigger: ".typewriter",
  start: "top 10%",
  onEnter: function () {
    animateTypewriter();
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".square"),
  {
    duration: 10,
    scrollTrigger: {
      trigger: ".square",
      start: "top 30%",
      end: "center 20%",
      markers: true,
      toggleClass: "red",
    },
  };





  