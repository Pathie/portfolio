const myImage = document.querySelector("img");

myImage.addEventListener("mouseenter", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/headshot.svg") {
    myImage.setAttribute("src", "images/headshot-casual.svg");
  } else {
    myImage.setAttribute("src", "images/headshot.svg");
  }
});
