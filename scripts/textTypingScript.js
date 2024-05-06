document.addEventListener("DOMContentLoaded", function () {
  const speed = 30;

  const typeText = (elementToType, textToType) => {
    let letterIndex = 0;
    const type = () => {
      if (letterIndex < textToType.length) {
        elementToType.innerHTML += textToType.charAt(letterIndex);
        letterIndex++;
        setTimeout(type, speed);
      } else {
        // elementToType.style.minHeight = "inherit";
      }
    };
    type();
  };

  const elementsToType = [
    ...document.getElementsByClassName("typeTextAnimation"),
  ];

  elementsToType.forEach((currentElement) => {
    const lines = currentElement.textContent.split("\n");

    // Iteracja przez każdą linijkę tekstu
    lines.forEach((line) => {
      // Podzielenie linijki na słowa za pomocą spacji
      const words = line.trim().split(" ");

      // Jeśli linijka nie jest pusta
      if (words.length > 0) {
        // Wyświetlenie ostatniego słowa
        const lastWord = words[words.length - 1];
        console.log(lastWord);
        // Możesz wstawić tutaj kod, który wyświetli ostatnie słowo w odpowiedni sposób
      }
    });

    currentElement.parentNode.style.position = "relative";

    const fadedTextElement = document.createElement("span");
    fadedTextElement.classList.add("faded");

    fadedTextElement.innerHTML = currentElement.innerHTML;

    const elementHeight = currentElement.scrollHeight;
    const textToType = currentElement.innerText;

    currentElement.innerHTML = "";
    currentElement.style.minHeight = elementHeight + "px";
    currentElement.appendChild(fadedTextElement);

    const onScrollSection = () => {
      const elementOffset = currentElement.getBoundingClientRect();
      const viewPoint = window.innerHeight / 2;

      if (elementOffset.top <= viewPoint && elementOffset.bottom >= viewPoint) {
        typeText(currentElement, textToType);
        window.removeEventListener("scroll", onScrollSection);
      }
    };

    window.addEventListener("scroll", onScrollSection);
  });
});
