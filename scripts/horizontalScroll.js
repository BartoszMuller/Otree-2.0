document.addEventListener("DOMContentLoaded", function () {
  const elements = [...document.querySelectorAll(".horizontalScroll")];
  console.log(elements)
  elements.forEach((currentElement) => {
    currentElement.addEventListener("wheel", (event) => {
      event.currentTarget.scrollLeft += event.deltaY;
      event.preventDefault();
    });
  });
  
});
