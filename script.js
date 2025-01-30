gsap.from(".main h3", {
  y: -50,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.2,
  opacity: 0,
});

let option = {
  strings: ["Full Stack Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
};
let typed = new Typed(".text", option);
