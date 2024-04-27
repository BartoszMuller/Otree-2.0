const elementsToCheck = [
  ...document.getElementsByClassName("onFirstTimeView"),
];

elementsToCheck.forEach((currentElement) => {

  const onScrollSection = () => {
    const elementOffset = currentElement.getBoundingClientRect();
    if (
      elementOffset.top <= window.innerHeight / 1.8  &&
      elementOffset.bottom >= window.innerHeight / 1.8
    ) {
      currentElement.classList.add('isShown')
      window.removeEventListener("scroll", onScrollSection);
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", onScrollSection);
  });
});
