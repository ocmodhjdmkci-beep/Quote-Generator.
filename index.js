var quoteText = document.getElementById("quote-text");
var quoteAuthor = document.getElementById("quote-author");
var newQuoteBtn = document.getElementById("new-quote");
var quotes = [
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Do not take life too seriously. You will never get out of it alive.",
    author: "Elbert Hubbard"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  }
];
newQuoteBtn.addEventListener("click", function () {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var selectedQuote = quotes[randomIndex];

  quoteText.textContent = `"${selectedQuote.quote}"`;
  quoteAuthor.textContent = `-- ${selectedQuote.author}`;
});
