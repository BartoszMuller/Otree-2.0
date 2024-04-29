document.addEventListener("DOMContentLoaded", function () {
  let currentQuoteNumber = 1;
  let autoChangeQuoteSpeed = 6000;
  const clientsQuotesElement = document.querySelector(".clientsQuotes-content");
  const currentQuoteNumberElement = document.querySelector(".current-quote");
  const amountOfQuotesElement = document.querySelector(".max-quote");
  const prevQuoteButton = document.querySelector(".prev-quote");
  const nextQuoteButton = document.querySelector(".next-quote");

  const amountOfQuotes = clientsQuotesElement.childElementCount;

  currentQuoteNumberElement.innerHTML = currentQuoteNumber;
  amountOfQuotesElement.innerHTML = amountOfQuotes;
  clientsQuotesElement.children[currentQuoteNumber - 1].style.opacity = "1";

  const checkQuoteNumber = () => {
    autoChangeQuotes();
    clientsQuotesElement.closest("section");

    if (currentQuoteNumber >= amountOfQuotes) {
      nextQuoteButton.classList.add("disabled");
    } else if (nextQuoteButton.classList.contains("disabled")) {
      nextQuoteButton.classList.remove("disabled");
    }

    if (currentQuoteNumber <= 1) {
      prevQuoteButton.classList.add("disabled");
    } else if (prevQuoteButton.classList.contains("disabled")) {
      prevQuoteButton.classList.remove("disabled");
    }
  };

  const showPrevQuote = () => {
    if (currentQuoteNumber > 1) {
      clientsQuotesElement.children[currentQuoteNumber - 1].style.opacity = "0";
      clientsQuotesElement.style.transform =
        "translateX(-" + (currentQuoteNumber - 2) + "00vw)";

      currentQuoteNumber--;

      clientsQuotesElement.children[currentQuoteNumber - 1].style.opacity = "1";
      currentQuoteNumberElement.innerHTML = currentQuoteNumber;

      checkQuoteNumber();
    }
  };

  const showNextQuote = () => {
    if (currentQuoteNumber < amountOfQuotes) {
      clientsQuotesElement.children[currentQuoteNumber - 1].style.opacity = "0";
      clientsQuotesElement.style.transform =
        "translateX(-" + currentQuoteNumber + "00vw)";

      currentQuoteNumber++;

      clientsQuotesElement.children[currentQuoteNumber - 1].style.opacity = "1";
      currentQuoteNumberElement.innerHTML = currentQuoteNumber;

      checkQuoteNumber();
    }
  };

  autoChangeInterval = setInterval(showNextQuote, autoChangeQuoteSpeed);

  const autoChangeQuotes = () => {
    clearInterval(autoChangeInterval);
    if (currentQuoteNumber === amountOfQuotes) {
      currentQuoteNumber = 2;
      autoChangeInterval = setInterval(showPrevQuote, autoChangeQuoteSpeed);
    } else {
      autoChangeInterval = setInterval(showNextQuote, autoChangeQuoteSpeed);
    }
  };

  checkQuoteNumber();
  prevQuoteButton.addEventListener("click", showPrevQuote);
  nextQuoteButton.addEventListener("click", showNextQuote);
});
