const displayQuotes = document.getElementById("display-area");
const nextQuoteButton = document.getElementById("next-button")

const randomQuotes = [
  {
    quote: "The Way To Get Started Is To Quit Talking And Begin Doing.",
    author: "Walt Disney",
  },
  {
    quote: "You Must Be The Change You Wish To See In The World.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Spread Love Everywhere You Go. Let No One Ever Come To You Without Leaving Happier.",
    author: "Mother Theresa",
  },
  {
    quote:
      "The Best And Most Beautiful Things In The World Cannot Be Seen Or Even Touched-They Must Be Felt With The Heart.",
    author: "Helen Keller",
  },
  {
    quote: "You Miss 100% Of The Shots You Don't Take.",
    author: "Wayne Gretzky",
  },
  {
    quote:
      "Twenty Years From Now You'll Be More Disappointed By The Things You Didn't Do Than By The Ones You Did.....",
    author: "Mark Twain",
  },
  {
    quote:
      "There Is Not Enough Goodness And Love In The World To Permit Giving Any Of It Away To 'Ungrateful' Beings.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "By A Lie, A Man Annihilates His Dignity As A Man.",
    author: "Immanuel Kant",
  },
  {
    quote: "The Only True Wisdom Is In Knowing You Know Nothing.",
    author: "Socrates",
  },
  { quote: "I Think, Therefore I Am.", author: "Rene Descartes" },
  {
    quote:
      "To Be Yourself In A World That Is Constantly Trying To Make You Something Else Is The Greatest Accomplishment.",
    author: "Ralph Waldo Emerson",
  },
];

let currentIndex = 0;

// Display the first quote
function displayCurrentQuote() {
  const currentQuote = randomQuotes[currentIndex];
  displayQuotes.innerHTML = `<p>"${currentQuote.quote}"<span class="author"> - ${currentQuote.author}</span></p>`;
}

// Event listener for the button
nextQuoteButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % randomQuotes.length; // Cycle through the quotes
  displayCurrentQuote();
});

// Initialize with the first quote
displayCurrentQuote();