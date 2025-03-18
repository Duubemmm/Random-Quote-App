const displayQuotes = document.querySelector(".display-area");
// const nextQuoteButton = document.getElementById("nextQuoteButton");
const famousQuoteButton = document.getElementById("famousQuotesButton");
const inspirationalQuoteButton = document.getElementById("inspirationalQuotesButton");
const randomButton = document.getElementById("randomButton");
const shareButton = document.getElementById("shareButton");

let quotes = [];
let filteredQuotes = [];
let currentIndex = 0;

// Fetch quotes from the API
fetch(
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json"
)
  .then((response) => response.json())
  .then((data) => {
    quotes = data;
    filteredQuotes = quotes; // Initialize filteredQuotes with all quotes
    displayCurrentQuote(); // Display the first quote after fetching
  })
  .catch((error) => {
    console.error("Error fetching quotes:", error);
  });

// Display the current quote
function displayCurrentQuote() {
  if (filteredQuotes.length === 0) return;

  const currentQuote = filteredQuotes[currentIndex];
  displayQuotes.innerHTML = `
    <p class="author">${currentQuote.author}</p>
    <p>"${currentQuote.quote}"</p>
  `;
}

// Display a random quote
function displayRandomQuote() {
  if (quotes.length === 0) return;

  currentIndex = Math.floor(Math.random() * quotes.length);
  filteredQuotes = quotes; // Reset filteredQuotes to all quotes
  displayCurrentQuote();
}

// Filter quotes by tag (famous or inspirational)
function filterQuotesByTag(tag) {
  return quotes.filter((quote) => quote.tag === tag);
}

// Event listener for the "Next Quote" button
randomButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % filteredQuotes.length; // Cycle through the filtered quotes
  displayCurrentQuote();
});

// Event listener for the "Famous Quotes" button
famousQuoteButton.addEventListener("click", function () {
  filteredQuotes = filterQuotesByTag("famous");
  if (filteredQuotes.length > 0) {
    currentIndex = 0;
    displayCurrentQuote();
  } else {
    displayQuotes.innerHTML = `<p>No famous quotes found.</p>`;
  }
});

// Event listener for the "Inspirational" button
inspirationalQuoteButton.addEventListener("click", function () {
  filteredQuotes = filterQuotesByTag("inspirational");
  if (filteredQuotes.length > 0) {
    currentIndex = 0;
    displayCurrentQuote();
  } else {
    displayQuotes.innerHTML = `<p>No inspirational quotes found.</p>`;
  }
});

// Event listener for the "Random" button
randomButton.addEventListener("click", displayRandomQuote);

// Event listener for the "Share" button
shareButton.addEventListener("click", function () {
  const currentQuote = filteredQuotes[currentIndex];
  const quoteText = `"${currentQuote.quote}" - ${currentQuote.author}`;

  if (navigator.share) {
    navigator
      .share({
        title: "Check out this quote!",
        text: quoteText,
      })
      .then(() => console.log("Quote shared successfully"))
      .catch((error) => console.error("Error sharing quote:", error));
  } else {
    // Fallback for browsers that don't support the Web Share API
    navigator.clipboard
      .writeText(quoteText)
      .then(() => alert("Quote copied to clipboard!"))
      .catch((error) => console.error("Failed to copy quote:", error));
  }
});

// Initialize with the first quote
displayCurrentQuote();