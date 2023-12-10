console.log("test");

const header = document.querySelector(".header");
console.log(header);

header.classList.toggle("is-sticky", window.scrollY > 200);

window.onscroll = () => {
  header.classList.toggle("is-sticky", window.scrollY > 200);
};
