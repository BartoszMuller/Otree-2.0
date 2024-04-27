const elementsToCheck = [
  ...document.getElementsByClassName("onWindowCurrency"),
];

elementsToCheck.forEach((currentElement) => {

  const onScrollSection = () => {
    const elementOffset = currentElement.getBoundingClientRect();
    if (
      elementOffset.top <= window.innerHeight / 1.8  &&
      elementOffset.bottom >= window.innerHeight / 1.8
    ) {
      currentElement.classList.add('isCurrentWindow')
    } else {
      currentElement.classList.remove('isCurrentWindow')
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", onScrollSection);
  });
});
