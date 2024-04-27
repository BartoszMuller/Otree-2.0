const speed = 30;

const typeText = (elementToType, textToType) => {
  let letterIndex = 0;
  const type = () => {
    if (letterIndex < textToType.length) {
      elementToType.innerHTML += textToType.charAt(letterIndex);
      letterIndex++;
      setTimeout(type, speed);
    } else {
      elementToType.style.minHeight = "inherit";
    }
  };
  type();
};

const elementsToType = [
  ...document.getElementsByClassName("typeTextAnimation"),
];

elementsToType.forEach((currentElement) => {
  currentElement.parentNode.style.position = "relative";

  const fadedTextElement = currentElement.cloneNode(true);
  fadedTextElement.classList.add("faded");
  currentElement.after(fadedTextElement);

  const typingSection = currentElement.closest("section");
  const typingSectionTop = typingSection.offsetTop;

  const elementHeight = currentElement.scrollHeight;
  const textToType = currentElement.innerText;

  currentElement.innerHTML = "";
  currentElement.style.minHeight = elementHeight + "px";

  const onScrollSection = () => {
    const windowScrollTop = window.scrollY;
    const windowScrollBottom = windowScrollTop + window.innerHeight / 1.8;
    if (
      windowScrollTop <= typingSectionTop &&
      typingSectionTop < windowScrollBottom
    ) {
      typeText(currentElement, textToType);
      window.removeEventListener("scroll", onScrollSection);
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", onScrollSection);
  });
});
