import gsap from "gsap";

const container = document.querySelector(".container");
const totalImages = 7;

if (container) {
  container.innerHTML = "";

  for (let i = 1; i <= totalImages; i++) {
    const imgUrl = new URL(`../assets/images/image-${i}.jpg`, import.meta.url).href;
    const block = document.createElement("div");

    block.classList.add("block");
    block.style.backgroundImage = `url(${imgUrl})`;
    block.style.zIndex = i;
    container.appendChild(block);
  }
}

const textWrapper = document.querySelector(".title");
if (textWrapper) {
  const text = textWrapper.textContent.trim();
  textWrapper.innerHTML = "";

  text.split(" ").forEach((word) => {
    const wordSpan = document.createElement("span");
    wordSpan.classList.add("word-group");

    wordSpan.innerHTML = word.split("").map((char) => {
      return `<span class='letter' style='display:inline-block'>${char}</span>`;
    }).join("");

    textWrapper.appendChild(wordSpan);
  });
}

const tl = gsap.timeline({
  defaults: { ease: "expo.inOut" },
});

tl.from(".container > .block", {
  duration: 2,
  y: "100%",
  stagger: 0.4,
})

  .add("overlayStart")

  .to(".overlay", {
    duration: 0.5,
    y: "100%",
  }, "overlayStart")

  .to(".container", {
    duration: 2,
    scale: 2,
    y: "130%",
  }, "overlayStart+=0.1")

  .add("contentReveal", "-=1.3")

  .from(".navbar > div", {
    duration: 1.6,
    opacity: 0,
    y: -100,
    stagger: 0.08,
  }, "contentReveal")

  .from(".site-menu > div", {
    duration: 1,
    opacity: 0,
    y: -100,
    ease: "power2.out",
    stagger: 0.1,
  }, "contentReveal+=0.5")

  .from(".title .letter", {
    duration: 1.4,
    y: "100%",
    ease: "expo.out",
    stagger: 0.04,
  }, "contentReveal+=0.5");
