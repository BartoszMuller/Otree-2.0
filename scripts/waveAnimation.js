document.addEventListener("DOMContentLoaded", function () {
  const elementsToCheck = [...document.querySelectorAll(".rowWave > *")];
  console.log(elementsToCheck);
  let currentHeight = 0;
  let counter = 0;
  elementsToCheck.forEach((currentElement) => {
    console.log(currentElement);
    const onScrollSection = () => {
      const elementOffset = currentElement.getBoundingClientRect();
      const viewPoint = window.innerHeight / 1.3;

      if (elementOffset.top <= viewPoint && elementOffset.bottom >= viewPoint) {
        if (currentHeight !== elementOffset.top) {
          currentHeight = elementOffset.top;
          counter = 1;
        } else {
          counter++;
        }
        setTimeout(() => {
          currentElement.classList.add("UpDownIn");
        }, 300 * counter);
        window.removeEventListener("scroll", onScrollSection);
      }
    };

    window.addEventListener("scroll", onScrollSection);
  });
});
